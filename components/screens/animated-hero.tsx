"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Trophy, Zap } from "lucide-react"
import { ParticleField } from "./particle-field"
import { StatCounter } from "./stat-counter"

const HEADLINE = "Opportunity Starts Here"

function SplitHeadline({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ y: "60%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.05 * (wi * 4 + ci),
                ease: [0.23, 1, 0.32, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 ? <span className="inline-block w-[0.25em]">&nbsp;</span> : null}
        </span>
      ))}
    </h1>
  )
}

export function AnimatedHero() {
  return (
    <section
      id="main"
      className="relative isolate flex min-h-screen overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:items-center lg:pt-20 lg:pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-pattern mask-radial-fade opacity-60" aria-hidden />
      <div className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      <div className="mx-auto w-full max-w-9xl px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span className="text-foreground/90">{"🚀 India's Trusted Staffing Partner"}</span>
            </motion.div>

            <div className="mt-6">
              <SplitHeadline text={HEADLINE} />
            </div>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
            >
              Connecting India&apos;s best talent with forward-thinking organizations. We deliver
              end-to-end workforce solutions — from recruitment to talent strategy — with speed,
              precision, and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_12px_32px_-10px_oklch(0.78_0.15_180/0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-10px_oklch(0.78_0.15_180/0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Get Started</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact Us
              </a>

              <div className="ml-1 hidden items-center gap-3 sm:flex">
                {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                  <Zap className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {"✅ 48hr Delivery"}
                </span> */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                  <Trophy className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {"🏆 Top Staffing Co."}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero visual: orbital chess-knight path */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:col-span-5 lg:block"
            aria-hidden
          >
            <HeroOrbital />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-xl sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border/60 sm:p-6 lg:mt-14 lg:p-8"
        >
          <div className="sm:pr-8">
            <StatCounter value={5000} suffix="+" label="Placements Made" />
          </div>
          <div className="sm:px-8">
            <StatCounter value={300} suffix="+" label="Clients Served" />
          </div>
          <div className="sm:pl-8">
            <StatCounter value={98} suffix="%" label="Client Retention" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroOrbital() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-6 rounded-full border border-primary/15" />
      <div className="absolute inset-12 rounded-full border border-accent/20" />

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <div className="relative h-16 w-16 rounded-full bg-primary shadow-[0_0_60px_oklch(0.78_0.15_180/0.6)]" />
        </div>
      </div>

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={deg}
          className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2"
          style={{ rotate: deg }}
          animate={{ rotate: deg + 360 }}
          transition={{ duration: 24 + i * 6, ease: "linear", repeat: Infinity }}
        >
          <div
            className={`absolute -left-1.5 top-1/2 h-3 w-3 rounded-full ${
              i % 2 === 0 ? "bg-primary" : "bg-accent"
            } shadow-[0_0_20px_currentColor]`}
          />
        </motion.div>
      ))}

      {/* Knight path SVG accent */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-primary/40"
        fill="none"
      >
        <motion.path
          d="M 20 80 L 40 80 L 40 60 L 60 60 L 60 40 L 80 40 L 80 20"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  )
}
