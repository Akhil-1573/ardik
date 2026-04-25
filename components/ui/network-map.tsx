"use client"

import { motion } from "framer-motion"

// Simplified city coordinates inside a 800x500 box for the background map
const CITIES: Array<{ x: number; y: number; label: string }> = [
    { x: 100, y: 55,  label: "Point-11" }, //top
    { x: 125, y: 85,  label: "Point-12" }, //tr
    { x: 125, y: 125,  label: "Point-13" }, //br
    { x: 80, y: 90,  label: "Point-14" }, //tl
    { x: 95, y: 130,  label: "Point-15" }, //bl

    { x: 50, y: 200, label: "Point 1" },
    { x: 20,  y: 300, label: "Point 2" },
    { x: 40,  y: 400, label: "Point 3" },
    { x: 30,  y: 650, label: "Point 4" },

    { x: 110, y: 505,  label: "Point-21" }, //top
    { x: 135, y: 535,  label: "Point-22" }, //tr
    { x: 135, y: 575,  label: "Point-23" }, //br
    { x: 90, y: 540,  label: "Point-24" }, //tl
    { x: 105, y: 580,  label: "Point-25" }, //bl

    { x: 250, y: 425,  label: "Point 5" },
    { x: 325, y: 500,  label: "Point 6" },
    { x: 435, y: 535,  label: "Point 7" },
    { x: 535, y: 555,  label: "Point 8" },
    { x: 455, y: 435,  label: "Point 9" },
    { x: 505, y: 635,  label: "Point 10" },
    { x: 545, y: 400,  label: "Point 11" },
    { x: 515, y: 280,  label: "Point 12" },
    { x: 530, y: 185,  label: "Point 13" },
    { x: 40, y: 760, label: "Point 14" },
    { x: 20, y: 900, label: "Point 15" },

    { x: 110, y: 915,  label: "Point-31" }, //top
    { x: 135, y: 945,  label: "Point-32" }, //tr
    { x: 135, y: 985,  label: "Point-33" }, //br
    { x: 90, y: 950,  label: "Point-34" }, //tl
    { x: 105, y: 990,  label: "Point-35" }, //bl


    { x: 20, y: 1000, label: "Point 16" },
    { x: 45, y: 1100, label: "Point 17" },
    { x: 20, y: 1200, label: "Point 18" },
    { x: 30,  y: 1300, label: "Point 19" },
    { x: 70,  y: 1380, label: "Point 20" },
    { x: 30,  y: 1360, label: "Point 21" },
    { x: 80,  y: 1330, label: "Point 22" },
    { x: 500,  y: 1000, label: "Point 23" },
    { x: 540,  y: 1100, label: "Point 24"},
    { x: 490,  y: 1250,  label: "Point 25" },
    { x: 480,  y: 1350, label: "Point 26" },
    { x: 530,  y: 900, label: "Point 27" },
    { x: 540,  y: 1340, label: "Point 28" },
]

export function NetworkMap() {
  return ( 
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-90" aria-hidden>
         <div className="absolute left-1/2 top-0 -translate-x-[42%] sm:-translate-x-[46%] md:-translate-x-1/2 h-full w-[1440px] md:w-[1440px] lg:w-[1440px]">
        {/* Background network map */}
        <svg
          viewBox="0 0 560 1400"
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Connection lines */}
          {CITIES.map((a, i) =>
            CITIES.slice(i + 1).map((b, j) => {
              const dx = a.x - b.x
              const dy = a.y - b.y
              const d = Math.sqrt(dx * dx + dy * dy)
              if (d > 160) return null
              return (
                <line
                  key={`${i}-${j}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="oklch(0.78 0.15 180)"
                  strokeOpacity={Math.max(0.04, 0.18 - d / 1200)}
                  strokeWidth={0.5}
                />
              )
            }),
          )}
          {/* City nodes */}
          {CITIES.map((c, i) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r={3} fill="oklch(0.78 0.15 180)" />
              <motion.circle
                cx={c.x}
                cy={c.y}
                r={3}
                fill="oklch(0.78 0.15 180)"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: `${c.x}px ${c.y}px` }}
              />
            </g>
          ))}
        </svg>
        </div>
      </div>
  )
}