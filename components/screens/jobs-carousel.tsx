"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

type Job = {
  role: string
  location: string
  type: string
  department: string
  summary: string
}

const JOBS: Job[] = [
  {
    role: "Senior Software Engineer",
    location: "Bangalore",
    type: "Full-time",
    department: "Engineering",
    summary:
      "Lead product development for a high-growth SaaS client. 6+ years in React, Node.js, and distributed systems.",
  },
  {
    role: "Finance Analyst",
    location: "Mumbai",
    type: "Full-time",
    department: "Finance",
    summary:
      "Drive FP&A, forecasting, and investor reporting for a listed consumer brand. Strong Excel + BI stack required.",
  },
  {
    role: "HR Business Partner",
    location: "Delhi",
    type: "Full-time",
    department: "People",
    summary:
      "Partner with senior leaders to shape org design, talent reviews, and retention strategy at a scaling tech company.",
  },
  {
    role: "Operations Manager",
    location: "Hyderabad",
    type: "Full-time",
    department: "Operations",
    summary:
      "Own end-to-end supply chain and quality operations for a D2C brand expanding across South India.",
  },
]

export function JobsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.min(480, el.clientWidth * 0.8)
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <section id="jobs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              Open Positions
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
              Current Job Openings
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Browse our active listings and apply today. New opportunities added weekly.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous roles"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next roles"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pt-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Job openings"
          tabIndex={0}
        >
          {JOBS.map((job, i) => (
            <JobCard key={job.role} job={job} index={i} />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div
            className="h-1 flex-1 overflow-hidden rounded-full bg-secondary"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-150"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">
            <span aria-hidden>{"→"}</span> Swipe to explore roles
          </span>
        </div>
      </div>
    </section>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_60px_-20px_oklch(0.78_0.15_180/0.4)] sm:w-[52%] md:w-[38%] lg:w-[30%]"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
          <Briefcase className="h-3.5 w-3.5 text-primary" aria-hidden />
          {job.department}
        </span>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
          {job.type}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{job.role}</h3>

      <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
          <span className="relative h-2 w-2 rounded-full bg-primary" />
        </span>
        <MapPin className="h-4 w-4" aria-hidden />
        {job.location}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

      <div className="mt-auto pt-6">
        <a
          href="#cta"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_oklch(0.78_0.15_180/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </motion.article>
  )
}
