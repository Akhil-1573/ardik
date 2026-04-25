"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Connection-node particle field.
 * - Lightweight canvas implementation (no deps)
 * - Respects prefers-reduced-motion (disables animation)
 * - Reduces particle count on smaller viewports
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = width < 768 ? 0.00005 : 0.00012
      const count = Math.min(90, Math.max(24, Math.floor(width * height * density)))
      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    let raf = 0
    const LINK = 130
    const tick = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        // mouse attraction
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const d2 = dx * dx + dy * dy
        if (d2 < 140 * 140) {
          const d = Math.sqrt(d2) || 1
          n.vx += (dx / d) * 0.002
          n.vy += (dy / d) * 0.002
        }
        // velocity damping
        n.vx = Math.max(-0.6, Math.min(0.6, n.vx * 0.995))
        n.vy = Math.max(-0.6, Math.min(0.6, n.vy * 0.995))

        ctx.beginPath()
        ctx.fillStyle = "rgba(0, 212, 170, 0.55)"
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK * LINK) {
            const alpha = 1 - Math.sqrt(d2) / LINK
            ctx.strokeStyle = `rgba(0, 212, 170, ${alpha * 0.22})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    if (!reduced) {
      raf = requestAnimationFrame(tick)
    } else {
      // Single static frame
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = "rgba(0, 212, 170, 0.35)"
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  )
}
