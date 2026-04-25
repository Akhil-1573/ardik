"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useBreakpoint } from '@/hooks/use-mobile'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogPortal } from "@/components/ui/dialog"
import { ArrowUpRight, Check, Compass, Layers, Users, type LucideIcon } from "lucide-react"
// import type { LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  titlep: string
  description: string
  descriptionp: string
  details: string[]
  metrics: Metric[]
}

type Metric = {
  value: string
  label: string
}

const SERVICES: Service[] = [
  {
    icon: Users,
    title: "Staffing & Recruiting",
    titlep: "Staffing & Recruiting Services",
    description:
      "End-to-end talent acquisition solutions connecting skilled professionals with leading organizations across all industries and experience levels.",
      // "Permanent, contract, and contract-to-hire placements across technology, finance, HR, operations, and more — delivered with precision and cultural fit in mind.",
    descriptionp: "We provide end-to-end recruitment solutions tailored to your industry and organizational culture. Our expert consultants leverage deep networks and advanced screening processes to identify the best-fit candidates quickly.",
    details: [
      "Permanent & Temporary Staffing",
      "Executive Search & Headhunting", 
      "Campus Recruitment Drives", 
      "Mass Hiring Programs", 
      "Background Verification & Reference Checks",
      "Onboarding & Induction Support",
    ],
    metrics: [
      { value: "5,000+", label: "Placements"},
      { value: "72hrs", label: "Avg Turnaround"},
      { value: "95%", label: "Offer Acceptance"},
      { value: "300+", label: "Industries"},
    ],
  },
  {
    icon: Compass,
    title: "Talent Advisory",
    titlep: "Talent Advisory Services",
    description:
        "Strategic workforce consulting and talent insights to help your organization build a future-ready team with data-driven hiring strategies.",
      // "Strategic guidance on workforce planning, employer branding, compensation benchmarking, and diversity hiring to help you win the long game for talent.",
    descriptionp: "Our strategic talent advisory practice helps organizations build high-performing teams through data-driven workforce planning, compensation benchmarking, and employer branding initiatives.",
    details: [
      "Workforce Planning & Strategy",
      "Compensation & Benefits Benchmarking",
      "Employer Branding Solutions",
      "Talent Market Mapping",
      "HR Policy & Process Design",
      "Leadership Assessment Programs",
    ],
    metrics: [
      { value: "150+", label: "Advisory Projects"},
      { value: "40%", label: "Cost Savings"},
      { value: "2x", label: "Hiring Efficiency"},
      { value: "98%", label: "Client Satisfaction"},
    ],
  },
  {
    icon: Layers,
    title: "Workforce Management",
    titlep: "Workforce Management Services",
    description:
        "Comprehensive workforce planning, payroll management, and compliance solutions to streamline your human resource operations efficiently.",
      // "End-to-end management of payroll, compliance, onboarding, and performance — so your teams stay focused on building, not on administration.",
    descriptionp: "Streamline your workforce operations with our comprehensive management solutions. From payroll processing to compliance management, we handle the complexities so you can focus on your core business.",
    details: [
      "Payroll Processing & Compliance",
      "Contract Workforce Management",
      "Labour Law Compliance",
      "Employee Lifecycle Management",
      "Attendance & Leave Management",
      "HR Analytics & Reporting",
    ],
    metrics: [
      { value: "10,000+", label: "Employees Managed"},
      { value: "100%", label: "Compliance Rate"},
      { value: "20+", label: "States Covered"},
      { value: "99.9%", label: "Payroll Accuracy"},
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur"
          >
            Our Core Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-balance"
          >
            Comprehensive Workforce Solutions, designed to meet your Unique Talent needs
            {/* Workforce solutions, engineered for momentum */}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty"
          >
            — from frontline hiring to executive placement.
            {/* Three integrated capabilities that move in sync to get the right people in the right
            seats — fast. */}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon
  const { isMobile, isTablet, isDesktop } = useBreakpoint()

  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })

  const handlePointerDown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setStartPos({
        x: rect.left + rect.width / 2 - window.innerWidth /2,
        y: rect.top + rect.height / 2 - window.innerWidth /2,
      })
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.button
            ref= {triggerRef}
            type= "button"
            onPointerDown={handlePointerDown}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
            className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 text-left backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_-20px_oklch(0.78_0.15_180/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8"
        >
        {/* hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(400px circle at 50% 0%, oklch(0.78 0.15 180 / 0.15), transparent 60%)",
          }}
        />

        <div className="relative flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-[4deg] group-hover:scale-105">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden
         />
        </div>

        <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <div className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
          <span>Learn More</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            {"→"}
          </span>
        </div>
        </motion.button>
      </DialogTrigger>

      <DialogPortal>
      <DialogContent 
          className="border-none bg-transparent p-0 shadow-none max-w-none w-full overflow-visible"
      >
        <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {/* Service Card */}
          <motion.div
            initial={{ opacity: 1, scale: 0.9, x: startPos.x, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: isMobile ? 0 : isTablet ? 0 : -280,
              y: isMobile ? -70 : isTablet ? -120 : 0,
            }}
            transition={{ 
              opacity: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 0.5, ease: "easeOut" },
              x: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute w-[88vw] max-w-[560px] rounded-2xl border border-border/70 bg-background p-3 shadow-2xl backdrop-blur-xl sm:w-[70vw] sm:rounded-3xl sm:p-4 lg:p-6"
          >
              <DialogHeader className="text-left">
                <DialogTitle className="tracking-tight text-lg font-semibold leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                   {service.titlep}
                 </DialogTitle>
                <DialogDescription className="pt-3 text-xs leading-5 text-muted-foreground sm:pt-3 md:pt-4 sm:text-sm sm:leading-6 lg:text-base lg:leading-7">
                   {service.descriptionp}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                  {service.details.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <div className="mt-0.5 shrink-0 text-primary">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{point}</p>
                    </div>
                  ))}
              </div>
              <div className="mt-4 sm:mt-5 lg:mt-6">
                <button
                  type="button"
                  className="inline-flex min-h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 sm:min-h-10 sm:px-5 sm:text-sm"
                >
                    Enquire Now
                </button>
              </div>
          </motion.div>
            {/* Metrics Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: startPos.x, y: 100, zIndex: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: isMobile ? 0 : isTablet ? 0 : 280,
                y: isMobile ? 230 : isTablet ? 260 : 100,
                // zIndex: 10
              }}
              transition={{ 
              opacity: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 0.5, ease: "easeOut" },
              x: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
              className="absolute w-[78vw] max-w-[320px] rounded-2xl border border-white/30 bg-background p-4 shadow-2xl backdrop-blur-xl sm:w-[38vw] sm:max-w-[360px] md:w-[55vw] md:max-w-[420px] sm:rounded-3xl sm:p-4 lg:p-6"
              // bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_35%),linear-gradient(180deg,rgba(8,12,28,1)_0%,rgba(15,32,74,1)_100%)]
            >
              <div className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:mb-4 sm:text-xs">
                Key Metrics
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {service.metrics.map((metric, index) => (
                  <div key={`${metric.label}-${index}`} className="min-w-0">
                    <div className="text-lg font-bold tracking-tight text-primary sm:text-xl lg:text-3xl">
                      {metric.value}
                    </div>
                    <div className="mt-0.5 text-[9px] text-muted-foreground sm:mt-1 sm:text-xs lg:text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
        </div>
      </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
