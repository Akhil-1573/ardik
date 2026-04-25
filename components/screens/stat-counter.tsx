"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"

type Props = {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export function StatCounter({ value, suffix = "", label, duration = 1.2 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const from = 0
    const to = value
    let raf = 0
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      setDisplay(Math.round(from + (to - from) * ease(t)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col items-start gap-1"
    >
      <div className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        <span className="tabular-nums">{display.toLocaleString()}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground sm:text-base">{label}</div>
    </motion.div>
  )
}
