import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const { personal, skills } = portfolioData

const codeLines = [
  { content: "// agiel.dev — Portfolio v3.0", type: "comment" },
  { content: "const developer = {", type: "default" },
  { content: "  name: \"Agiel Nawawi\",", type: "green" },
  { content: "  stack: [\"React\", \"TS\", \"Node\"],", type: "yellow" },
  { content: "  design: \"Collage Brutalism\",", type: "purple" },
  { content: "  available: true,", type: "orange" },
  { content: "};", type: "default" },
  { content: "", type: "default" },
  { content: "export default developer;", type: "green" },
]

const springSmooth = { type: "spring" as const, stiffness: 60, damping: 18 }
const springFast = { type: "spring" as const, stiffness: 100, damping: 22 }

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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden border-b-2 border-black"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="relative border-r-2 border-black hidden md:block" style={{ background: "var(--color-lavender)" }}>
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative" style={{ background: "var(--color-orange)" }}>
          <div className="absolute inset-0 grid-bg opacity-25" />
          <div className="absolute inset-0 md:hidden grid-bg opacity-40" style={{ background: "var(--color-lavender)" }} />
        </div>
      </div>

      {/* Container Utama — Diperbaiki: px-6 md:px-12 menjadi px-10 md:px-16, gap-10 menjadi gap-16 lg:gap-20 */}
      <div className="w-full max-w-7xl mx-auto px-10 md:px-16 py-24 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springSmooth }}
          className="flex flex-col gap-8 text-left z-10"
        >
          <div className="flex flex-col gap-5">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              {/* Judul Besar — Diperbaiki: mt-10 md:mt-0 untuk memberikan padding agar tidak tertutup */}
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mt-10 md:mt-0"
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
              <div className="flex flex-wrap gap-2">
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
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a href="#projects" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-projects">
              LIHAT PROYEK <ArrowRight size={15} />
            </a>
            <a href="#contact" className="sticker-btn text-xs md:text-sm px-5 py-3" style={{ background: "var(--color-orange)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-contact">
              HUBUNGI <Mail size={15} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springSmooth, delay: 0.12 }}
          className="hidden lg:flex flex-col gap-5 w-full"
        >
          {/* Terminal + Foto overlay */}
          <div className="relative">
            {/* Foto — Diperbaiki: -right-10 -bottom-10 z-10 w-40, aspectRatio diperbaiki agar tidak gepeng */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springSmooth, delay: 0.6 }}
              className="absolute -right-10 -bottom-10 z-10"
            >
              <div
                className="w-40 border-2 border-black overflow-hidden"
                style={{ boxShadow: '8px 8px 0px #000', aspectRatio: '1/1.5' }}
              >
                <img
                  src="/foto.jpg"
                  alt="Agiel Nawawi"
                  className="w-full h-full object-cover object-top"
                  style={{ background: 'var(--color-lavender)' }}
                />
              </div>
            </motion.div>
            <div
              className="border-2 border-black overflow-hidden w-full"
              style={{ background: "#0F172A", boxShadow: "10px 10px 0px #000" }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b-2"
                style={{ background: "#1E293B", borderColor: "var(--color-charcoal)" }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F59E0B" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
                <span className="ml-2 text-xs opacity-60" style={{ fontFamily: "var(--font-mono)", color: "white" }}>
                  ~/agiel.dev
                </span>
              </div>
              <div className="code-terminal text-xs md:text-sm leading-relaxed p-4 md:p-5">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springFast, delay: 0.4 + i * 0.07 }}
                    className={`ct-${line.type}`}
                  >
                    {line.content || "\u00A0"}
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="inline-block w-1.5 h-3 align-middle mt-1"
                  style={{ background: "#7DD3FC" }}
                />
              </div>
            </div>
          </div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full grid grid-cols-2 gap-4 md:gap-5"
          >
            {[
              { label: "PROJECTS", value: "4+" },
              { label: "SEMESTER", value: "4" },
            ].map(stat => (
              <div
                key={stat.label}
                className="sticker-box p-4 md:p-6 bg-white/10 w-full"
                style={{ borderColor: "var(--color-charcoal)", boxShadow: "8px 8px 0px #000" }}
              >
                <div className="text-3xl md:text-4xl font-black leading-none mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold tracking-wider opacity-80" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}