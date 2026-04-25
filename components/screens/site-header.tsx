"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#stories", label: "Stories" },
  { href: "#jobs", label: "Opportunities" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <a href="#main" className="group flex items-center gap-2" aria-label="Ardik Staffing home">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold tracking-tight"
            aria-hidden
          >
            A
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Ardik<span className="text-primary"> Staffing</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.78_0.15_180/0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_oklch(0.78_0.15_180/0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact us
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              {"→"}
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Contact us {"→"}
            </a>
          </nav>
        </div>
      ) : null}
    </motion.header>
  )
}
