"use client"

import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"
import { useState } from "react"
import { ArrowRight, Briefcase, Clock, Handshake, Mail, MapPin, Phone, Send, TrendingUp, X } from "lucide-react"

export function CtaBanner() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  return (
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">

      {/* Floating decorative icons */}
      <FloatingIcon
        className="left-[8%] top-[18%] hidden lg:block"
        delay={0}
        Icon={Briefcase}
        accent
      />
      <FloatingIcon
        className="right-[10%] top-[24%] hidden lg:block"
        delay={0.6}
        Icon={Handshake}
      />
      <FloatingIcon
        className="left-[14%] bottom-[18%] hidden lg:block"
        delay={1.1}
        Icon={TrendingUp}
        accent
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 text-center backdrop-blur-xl sm:p-16">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(600px circle at 50% 0%, oklch(0.78 0.15 180 / 0.18), transparent 60%)",
            }}
          />

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs font-medium text-primary"
          >
            Let&apos;s build together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative mt-5 font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance"
          >
            Ready to Build Your <span className="text-primary">Dream Team?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Let our experts find the perfect talent for your organization. Get started today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              type='button'
              onClick={() => setIsConsultationOpen(true)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_40px_-12px_oklch(0.82_0.14_75/0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-12px_oklch(0.82_0.14_75/0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* shine sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/30 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
              />
              <span className="relative">Get Free Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </button>
            <a
              href="#jobs"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
              <span className="transition-colors duration-300 group-hover:text-primary-foreground">
                View Job Openings
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      <ConsultationPopup 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  )
}

function ConsultationPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (typeof document === "undefined") return null
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent px-4 py-4 backdrop-blur-md sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close consultation form"
            onClick={onClose}
            className="absolute inset-0 cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 grid w-full max-w-md place-items-center bg-transparent p-3 backdrop-blur-xl sm:p-4 md:max-w-5xl md:grid-cols-[0.8fr_1.25fr] md:place-items-stretch md:items-center"
          >
            {/* <button
              type="button"
              aria-label="Close popup"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden />
            </button> */}

            <div className="relative hidden overflow-hidden rounded-2xl border border-border/70 bg-background p-4 sm:p-5 md:block">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(500px circle at 0% 0%, oklch(0.78 0.15 180 / 0.16), transparent 55%)",
                }}
              />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Contact Info
                </span>

                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  We&apos;re Here to Help
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Reach out to us through any of the channels below or fill out the form.
                </p>

                <div className="mt-5 space-y-3">
                  <ContactInfoItem
                    icon={Mail}
                    label="Email"
                    value="hr@ardikstaffing.com"
                  />

                  <ContactInfoItem
                    icon={Phone}
                    label="Phone"
                    value="+91 9945033466"
                  />

                  <ContactInfoItem
                    icon={MapPin}
                    label="Office"
                    value="Bangalore, Karnataka, India"
                  />

                  <ContactInfoItem
                    icon={Clock}
                    label="Working Hours"
                    value="Mon–Sat: 9:00 AM – 6:00 PM"
                  />
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-border/70 bg-card/50">
                  <iframe
                    title="Ardik Staffing office location"
                    src="https://www.google.com/maps?q=Bangalore,%20Karnataka,%20India&output=embed"
                    className="h-28 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl border border-border/70 bg-background p-4 sm:p-5 md:ml-3 md:mt-0">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(600px circle at 100% 0%, oklch(0.82 0.14 75 / 0.12), transparent 60%)",
                }}
              />

              <form className="relative">
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <FormField
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    name="fullName"
                  />

                  <FormField
                    label="Email"
                    required
                    placeholder="you@company.com"
                    name="email"
                    type="email"
                  />

                  <FormField
                    label="Phone"
                    required
                    placeholder="9XXXXXXXXX"
                    name="phone"
                    type="tel"
                  />

                  <FormField
                    label="Subject"
                    placeholder="How can we help?"
                    name="subject"
                  />
                </div>

                <div className="mt-3">
                  <label className="text-xs font-medium text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>

                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-xl border border-border/70 bg-card/60 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_12px_28px_-16px_oklch(0.82_0.14_75/0.48)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-18px_oklch(0.82_0.14_75/0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  label: string
  value: string
}) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-card/50 p-3 transition hover:border-primary/50 hover:bg-card/70">
      <div className="flex h-10 w-10 shrink items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition group-hover:-translate-y-0.5">
        <Icon className="h-4 w-4" aria-hidden />
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-xs font-medium text-foreground">
          {value}
        </div>
      </div>
    </div>
  )
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/70 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}

function FloatingIcon({
  className = "",
  delay = 0,
  Icon,
  accent = false,
}: {
  className?: string
  delay?: number
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  accent?: boolean
}) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.9, y: [0, -10, 0] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute grid h-14 w-14 place-items-center rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl ${className}`}
    >
      <Icon
        className={`block h-6 w-6 shrink-0 translate-y-[12px] ${accent ? "text-accent" : "text-primary"}`}
        aria-hidden
      />
    </motion.div>
  )
}
