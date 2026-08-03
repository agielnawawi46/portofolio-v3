import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

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
  const { language } = useLanguage()
  const { personal, skills } = portfolioData[language]

  const coreStackNames = ['Laravel', 'Django', 'Node.js', 'Next.js', 'MySQL']
  const topSkills = skills.filter(s => coreStackNames.includes(s.name))

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center border-b-2 border-black overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Lavender */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, background: "var(--color-lavender)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Container Utama Centered */}
      <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 relative z-10 flex flex-col items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ ...springSmooth }}
          className="flex flex-col items-center justify-center gap-8 text-center w-full"
        >
          <div className="flex flex-col items-center gap-6 w-full">

            {/* Judul Utama */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full text-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight text-center"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
              >
                AGIEL<br />
                NAWAWI
              </h1>
            </motion.div>

            {/* Sub-headline & Bio */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="flex flex-col items-center text-center w-full">
              <div
                className="inline-block px-4 py-2 mb-4 sticker-box"
                style={{ background: "var(--color-orange)", color: "var(--color-charcoal)" }}
              >
                <span className="font-bold text-xs md:text-sm lg:text-base tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {personal.tagline}
                </span>
              </div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed opacity-90 max-w-2xl text-center mx-auto" style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal)" }}>
                {personal.shortBio}
              </p>
            </motion.div>

            {/* Core Stack */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="flex flex-col items-center text-center w-full mt-2">
              <p className="text-[0.65rem] md:text-xs tracking-widest mb-3 opacity-70 uppercase font-bold text-center" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
                {language === 'en' ? 'Core Stack:' : 'Teknologi Utama:'}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center items-center">
                {topSkills.map(skill => (
                  <span key={skill.name} className="tech-tag text-xs md:text-sm lg:text-base px-3 md:px-4 py-1.5 md:py-2 font-bold" style={{ background: "var(--color-canvas)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <a href="#projects" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold" style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-projects">
              {language === 'en' ? 'VIEW PROJECTS' : 'LIHAT PROYEK'} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold" style={{ background: "var(--color-orange)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-contact">
              {language === 'en' ? 'CONTACT ME' : 'HUBUNGI SAYA'} <Mail size={18} />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}