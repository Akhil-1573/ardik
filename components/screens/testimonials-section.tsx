"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  title: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Outstanding service! Their talent advisory team helped us build an entire finance department from scratch. Highly professional and responsive.",
    name: "Priya Sharma",
    title: "CEO, FinanceFirst Ltd",
    initials: "PS",
  },
  {
    quote:
      "Ardik Staffing transformed our hiring process. They delivered 50+ qualified engineers within 3 weeks — far beyond our expectations.",
    name: "Rajesh Kumar",
    title: "HR Director, TechCorp India",
    initials: "RK",
  },
  {
    quote:
      "We've been working with Ardik for 3 years now. Consistent quality, fast turnaround, and they truly understand our business needs.",
    name: "Amit Patel",
    title: "Operations Head, LogiTech",
    initials: "AP",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [paused])

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length)
  }

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section
      id="stories"
      className="relative overflow-hidden py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
            Client Stories
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance">
            Trusted by hundreds of companies across India for their critical workforce needs.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 h-[360px] w-full overflow-visible sm:mt-12 sm:h-[340px] lg:h-[350px]">
          <div className="absolute left-1/2 top-0 h-full w-full max-w-7xl -translate-x-1/2">
            {TESTIMONIALS.map((testimonial, testimonialIndex) => {
              const position = getCarouselPosition(testimonialIndex, activeIndex)

              return (
                <CarouselCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  position={position}
                  onClick={() => {
                    if (position === "left") goPrev()
                    if (position === "right") goNext()
                  }}
                />
              )
            })}
          </div>
        </div>

        <div className="mx-auto -mt-8 flex max-w-4xl items-center justify-between gap-4 px-4 sm:-mt-2">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to story ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-10 bg-primary"
                    : "w-4 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function getCarouselPosition(testimonialIndex: number, activeIndex: number) {
  const total = TESTIMONIALS.length
  let offset = testimonialIndex - activeIndex

  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  if (offset === 0) return "center"
  if (offset === -1) return "left"
  return "right"
}

function CarouselCard({
  testimonial,
  position,
  onClick,
}: {
  testimonial: Testimonial
  position: "left" | "center" | "right"
  onClick: () => void
}) {
  const isCenter = position === "center"

  const cardPosition = {
    left: {
      x: "-120%",
      y: 25,
      scale: 0.86,
      opacity: 0.89,
      rotateY: 10,
      zIndex: 10,
      
    },
    center: {
      x: "-50%",
      y: 10,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      zIndex: 30,
      
    },
    right: {
      x: "20%",
      y: 25,
      scale: 0.86,
      opacity: 0.89,
      rotateY: -10,
      zIndex: 10,
      
    },
  }

  return (
    <motion.article
      animate={cardPosition[position]}
      transition={{
        duration: 0.75,
        ease: [0.23, 1, 0.32, 1],
      }}
      onClick={isCenter ? undefined : onClick}
      className={`absolute left-1/2 top-0 min-h-[300px] w-[78vw] max-w-[360px] rounded-3xl border border-border/70 bg-card p-4 text-left shadow-[0_24px_80px_-32px_oklch(0.78_0.15_180/0.45)] backdrop-blur-xl sm:min-h-[250px] sm:w-[46vw] sm:max-w-[560px] sm:p-6 lg:min-h-[270px] lg:p-7 ${
        isCenter ? "cursor-default" : "cursor-pointer hover:opacity-95"
      }`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <Quote
        className={`absolute left-5 top-4 text-primary/20 sm:left-5 sm:top-5 ${
          isCenter ? "h-7 w-7 sm:h-12 sm:w-12" : "h-6 w-6 sm:h-10 sm:w-12\0"
        }`}
        aria-hidden
      />

      <div className="relative pl-7 sm:pl-12">
        <blockquote
          className={`font-display font-semibold leading-relaxed text-foreground text-balance ${
            isCenter
              ? "text-sm leading-relaxed sm:text-lg lg:text-xl"
              : "text-xs leading-relaxed sm:text-base lg:text-lg"
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-4 flex items-center gap-3 sm:mt-5">
          <span
            className={`grid shrink-0 place-items-center rounded-full bg-primary/15 font-display font-semibold text-primary ring-2 ring-primary/40 ${
              isCenter ? "h-9 w-9 text-[11px] sm:h-10 sm:w-10 sm:text-xs" : "h-8 w-8 text-[10px] sm:h-9 sm:w-9 sm:text-[11px]"
            }`}
          >
            {testimonial.initials}
          </span>

          <div>
            <div className="text-sm font-semibold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-xs text-muted-foreground">
              {testimonial.title}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}