"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowRight, Code2, Sparkles, TrendingUp } from "lucide-react";

const orbitalPillars = [
  {
    angle: 0,
    title: "Technology",
    desc: "Build & Secure",
    icon: Code2,
    iconColor: "text-cyan",
    iconBg: "bg-cyan/10",
    borderHover: "hover:border-cyan/50",
    shadowHover: "hover:shadow-[0_0_24px_rgba(47,216,240,0.3)]",
  },
  {
    angle: 120,
    title: "Creative",
    desc: "Design & Brand",
    icon: Sparkles,
    iconColor: "text-azure",
    iconBg: "bg-azure/10",
    borderHover: "hover:border-azure/50",
    shadowHover: "hover:shadow-[0_0_24px_rgba(59,111,240,0.3)]",
  },
  {
    angle: 240,
    title: "Business",
    desc: "Scale & Optimize",
    icon: TrendingUp,
    iconColor: "text-violet",
    iconBg: "bg-violet/10",
    borderHover: "hover:border-violet/50",
    shadowHover: "hover:shadow-[0_0_24px_rgba(139,63,232,0.3)]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-avenio-mesh">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 pb-24 pt-12 md:grid-cols-2 md:px-10 md:pb-32 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Technology · Creativity · Business</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Your Vision,
            <br />
            <span className="bg-avenio-gradient bg-clip-text text-transparent">
              Our Solution.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
            Avenio brings technology, creativity and business strategy
            together under one roof - helping organizations build, secure,
            and grow with a single accountable partner.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/services">
              Explore Services <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>

        {/* Signature visual: Floating Gradient A Logo & Orbiting Pillars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          {/* Ambient Glows */}
          <div className="absolute -inset-4 rounded-full bg-avenio-gradient opacity-25 blur-3xl" />
          <div className="absolute -top-12 -left-12 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-12 -right-12 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />

          {/* Main Orbit Stage */}
          <div className="relative flex h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] md:h-[480px] md:w-[480px] items-center justify-center [--orbit-radius:145px] sm:[--orbit-radius:175px] md:[--orbit-radius:195px]">
            {/* Subtle Orbital Track Ring */}
            <div className="absolute h-[calc(var(--orbit-radius)*2)] w-[calc(var(--orbit-radius)*2)] rounded-full border border-dashed border-cyan/20" />

            {/* Concentric Decorative Ring */}
            <div className="absolute h-[calc(var(--orbit-radius)*2+36px)] w-[calc(var(--orbit-radius)*2+36px)] rounded-full border border-white/5" />

            {/* Central Floating Avenio Gradient Logo */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Avenio Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_35px_rgba(47,216,240,0.45)] drop-shadow-[0_0_70px_rgba(139,63,232,0.3)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Orbiting Container for the 3 Pillars */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              {orbitalPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="pointer-events-auto absolute"
                    style={{
                      transform: `rotate(${pillar.angle}deg) translateY(calc(-1 * var(--orbit-radius))) rotate(-${pillar.angle}deg)`,
                    }}
                  >
                    {/* Counter-rotate box to keep it horizontal and upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 45,
                        ease: "linear",
                      }}
                    >
                      <div
                        className={`flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-navy/90 px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 ${pillar.borderHover} ${pillar.shadowHover}`}
                      >
                        <div
                          className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg ${pillar.iconBg} ${pillar.iconColor}`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="font-display text-xs font-semibold text-ink whitespace-nowrap">
                            {pillar.title}
                          </p>
                          <p className="text-[10px] text-mist whitespace-nowrap">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
