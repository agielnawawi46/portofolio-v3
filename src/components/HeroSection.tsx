import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import HeroTerminal from './HeroTerminal'

const { personal, skills } = portfolioData

const springSmooth = { type: "spring" as const, stiffness: 60, damping: 18 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...springSmooth, delay: i * 0.08 },
  }),
}

export default function HeroSection() {
  const topSkills = skills.filter(s => s.category === "Frontend").slice(0, 4)

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col border-b-2 border-black"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="relative border-r-2 border-black hidden md:block" style={{ background: "var(--color-lavender)" }}>
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative" style={{ background: "var(--color-orange)" }}>
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute inset-0 md:hidden grid-bg opacity-40" style={{ background: "var(--color-lavender)" }} />
        </div>
      </div>

      {/* Container Utama */}
      <div className="w-full max-w-7xl mx-auto px-10 md:px-16 pt-64 pb-24 sm:pt-72 lg:pt-64 md:pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start lg:items-center flex-1">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springSmooth }}
          className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start z-10"
        >
          <div className="flex flex-col gap-5">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              {/* Judul Besar — Diperbaiki: mt-32 md:mt-0 untuk memberikan ruang ekstra yang SANGAT LEGA dari navbar */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-32 lg:mt-0"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
              >
                SOFTWARE<br />
                DEVELOPER
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
              <div
                className="inline-block px-3 py-1 mb-2 sticker-box w-max"
                style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)" }}
              >
                <span className="font-bold text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {personal.handle}
                </span>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-lg" style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal)" }}>
                {personal.bio}
              </p>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
              <p className="text-[0.65rem] tracking-widest mb-2 opacity-70 uppercase font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
                Core Stack:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {topSkills.map(skill => (
                  <span key={skill.name} className="tech-tag text-xs px-2.5 py-1.5" style={{ background: "var(--color-canvas)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full lg:w-auto"
          >
            <a href="#projects" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-projects">
              LIHAT PROYEK <ArrowRight size={15} />
            </a>
            <a href="#contact" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-orange)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-contact">
              HUBUNGI <Mail size={15} />
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block w-full">
          <HeroTerminal />
        </div>

      </div>

      {/* Terminal Block khusus Mobile, diletakkan di luar grid agar membuat halaman bertambah panjang ke bawah */}
      <div className="lg:hidden w-full max-w-xl mx-auto px-10 pb-24 relative z-10">
        <HeroTerminal />
      </div>
    </section>
  )
}