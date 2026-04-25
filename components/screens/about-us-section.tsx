"use client"

import { motion } from "framer-motion"
import { Award, Headphones, MapPin, Timer } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Advantage = {
  icon: LucideIcon
  stat: string
  title: string
  description: string
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Award,
    stat: "15+",
    title: "Years Experience",
    description:
      "A decade and a half of placing the right people in the right roles across India's most demanding industries.",
  },
  {
    icon: MapPin,
    stat: "Pan-India",
    title: "Presence",
    description:
      "Active talent networks across Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune, and 20+ more cities.",
  },
  {
    icon: Timer,
    stat: "48h",
    title: "Quick Turnaround",
    description:
      "First qualified shortlists on most roles within 48 hours — without compromising on fit or quality.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    title: "Dedicated Support",
    description:
      "A single point of contact from brief to onboarding — and beyond. Real humans, real accountability.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="why-us" className="relative py-14 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
            Why Choose Ardik
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
            Built for speed. Engineered for fit.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            We go beyond conventional staffing to deliver strategic talent partnerships that drive real business results.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {ADVANTAGES.map((a, i) => (
            <AdvantageTile key={a.title} advantage={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvantageTile({ advantage, index }: { advantage: Advantage; index: number }) {
  const Icon = advantage.icon
  // asymmetric offset for depth
  const offsets = ["lg:translate-y-0", "lg:translate-y-6", "lg:-translate-y-6", "lg:translate-y-0"]
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 28 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative grid overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_-20px_oklch(0.78_0.15_180/0.35)] sm:p-8 ${offsets[index % offsets.length]} `} //${offsets[index % offsets.length]}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "radial-gradient(500px circle at 100% 0%, oklch(0.82 0.14 75 / 0.1), transparent 60%)",
        }}
      />

      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[4deg]">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {advantage.stat}
          </div>
          <div className="mt-0.5 text-sm font-medium text-primary">{advantage.title}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {advantage.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
