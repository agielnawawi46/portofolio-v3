import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

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
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, background: "var(--color-lavender)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Container Utama */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10 flex flex-col items-center justify-center flex-1">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth }}
          className="flex flex-col gap-8 text-center items-center z-10 w-full"
        >
          <div className="flex flex-col gap-5 items-center w-full">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight mt-8 md:mt-0"
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
              <div className="flex flex-wrap gap-2 justify-center">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <a href="#projects" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-projects">
              LIHAT PROYEK <ArrowRight size={15} />
            </a>
            <a href="#contact" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-orange)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-contact">
              HUBUNGI <Mail size={15} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}