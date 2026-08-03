import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, Mail, Star, Sparkles } from 'lucide-react'
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

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
}

const floatingVariants: Variants = {
  animate: (i: number) => ({
    y: ["-5%", "5%", "-5%"],
    rotate: [0, i % 2 === 0 ? 10 : -10, 0],
    transition: {
      duration: 4 + (i * 0.5),
      repeat: Infinity,
      ease: "easeInOut",
    }
  })
}

export default function HeroSection() {
  const { language } = useLanguage()
  const { personal, skills } = portfolioData[language]

  const coreStackNames = ['Laravel', 'Django', 'Node.js', 'Next.js', 'MySQL']
  const topSkills = skills.filter(s => coreStackNames.includes(s.name))

  return (
    <section
      id="hero"
      className="px-6 sm:px-10 md:px-12 relative min-h-screen w-full flex flex-col items-center justify-center border-b-2 border-black overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Lavender */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, background: "var(--color-lavender)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating Neo-Brutalist Shapes */}
      <motion.div custom={1} variants={floatingVariants} animate="animate" className="absolute top-[15%] left-[5%] md:left-[10%] hidden md:block opacity-60 z-0 pointer-events-none">
        <Star size={64} strokeWidth={2.5} fill="var(--color-yellow)" color="var(--color-charcoal)" />
      </motion.div>
      <motion.div custom={2} variants={floatingVariants} animate="animate" className="absolute top-[60%] left-[8%] hidden lg:block opacity-60 z-0 pointer-events-none">
        <div className="w-16 h-16 rounded-full border-4" style={{ background: "var(--color-blue)", borderColor: "var(--color-charcoal)", boxShadow: "4px 4px 0px var(--color-charcoal)" }} />
      </motion.div>
      <motion.div custom={3} variants={floatingVariants} animate="animate" className="absolute top-[20%] right-[10%] hidden md:block opacity-60 z-0 pointer-events-none">
        <Sparkles size={72} strokeWidth={2} fill="var(--color-pink)" color="var(--color-charcoal)" />
      </motion.div>
      <motion.div custom={4} variants={floatingVariants} animate="animate" className="absolute bottom-[25%] right-[8%] hidden lg:block opacity-60 z-0 pointer-events-none">
        <div className="w-12 h-12 rotate-45 border-4" style={{ background: "var(--color-green)", borderColor: "var(--color-charcoal)", boxShadow: "4px 4px 0px var(--color-charcoal)" }} />
      </motion.div>

      {/* Container Utama */}
      <div className="w-full max-w-5xl xl:max-w-7xl mx-auto pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-12 lg:gap-16 w-full text-center lg:text-left">
          
          {/* KOLOM KIRI: Headline + Bio */}
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 w-full lg:w-1/2">
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
              >
                AGIEL<br />
                NAWAWI
              </h1>
            </motion.div>
            
            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full">
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed opacity-90 max-w-2xl lg:max-w-none mx-auto lg:mx-0" style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal)" }}>
                {personal.shortBio}
              </p>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Sub-headline + Core Stack + Buttons */}
          <div className="flex flex-col items-center lg:items-start gap-8 md:gap-12 w-full lg:w-1/2">
            <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full flex flex-col items-center lg:items-start">
              <div
                className="inline-block px-4 py-2 sticker-box"
                style={{ background: "var(--color-orange)", color: "var(--color-charcoal)" }}
              >
                <span className="font-bold text-xs md:text-sm lg:text-base tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                  {personal.tagline}
                </span>
              </div>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full flex flex-col items-center lg:items-start">
              <p className="text-[0.65rem] md:text-xs tracking-widest mb-3 opacity-70 uppercase font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
                {language === 'en' ? 'Core Stack:' : 'Teknologi Utama:'}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                {topSkills.map(skill => (
                  <span key={skill.name} className="tech-tag text-xs md:text-sm lg:text-base px-3 md:px-4 py-1.5 md:py-2 font-bold" style={{ background: "var(--color-canvas)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 w-full"
            >
              <a href="#projects" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold" style={{ background: "var(--color-charcoal)", color: "var(--color-canvas)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-projects">
                {language === 'en' ? 'VIEW PROJECTS' : 'LIHAT PROYEK'} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold" style={{ background: "var(--color-orange)", color: "var(--color-charcoal)", border: "2px solid var(--color-charcoal)" }} id="hero-cta-contact">
                {language === 'en' ? 'CONTACT ME' : 'HUBUNGI SAYA'} <Mail size={18} />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scrolling Marquee Banner at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t-2 border-black flex items-center h-12 sm:h-14 md:h-16 z-20" style={{ background: "var(--color-charcoal)" }}>
        <motion.div
          className="flex whitespace-nowrap items-center text-white font-black text-xs sm:text-sm md:text-base tracking-widest uppercase"
          variants={marqueeVariants}
          animate="animate"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {Array(8).fill("✦ FULL-STACK WEB DEVELOPMENT ✦ SCALABLE BACKEND ARCHITECTURE ✦ RESPONSIVE UI/UX ✦ CREATIVE PROBLEM SOLVING ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}