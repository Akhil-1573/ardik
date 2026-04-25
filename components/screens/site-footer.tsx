"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Github, Linkedin, Mail, Twitter } from "lucide-react"

const FOOTER_LINKS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#jobs" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Staffing & Recruiting", href: "#services" },
      { label: "Talent Advisory", href: "#services" },
      { label: "Workforce Management", href: "#services" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "hr@ardikstaffing.com", href: "#" },
      { label: "+91 9945033466", href: "#" },
      { label: "Bangalore, Karnataka, India", href: "#" },
      { label: "Send Enquiry", href: "#" },
    ],
  },
]

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3200)
  }

  return (
    <footer className="relative mt-10 border-t z-10 border-border/60">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <a href="#main" className="flex items-center gap-2" aria-label="Ardik Staffing home">
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Connecting talent with opportunity. Your trusted workforce solutions partner across India.
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex max-w-md items-center gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden
                />
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-full border border-border bg-card/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur transition-all focus-visible:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="relative inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_oklch(0.78_0.15_180/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.span
                      key="done"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Check className="h-4 w-4" aria-hidden />
                      Subscribed
                    </motion.span>
                  ) : (
                    <motion.span
                      key="cta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Subscribe
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:scale-105 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group relative inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden
                          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ardik Staffing Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
