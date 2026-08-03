import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
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


      {/* Container Utama */}
      <div className="w-full max-w-5xl xl:max-w-7xl mx-auto pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 relative z-10">

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-12 lg:gap-16 w-full text-center lg:text-left">

          {/* KOLOM KIRI: Headline + Bio */}
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 w-full lg:w-1/2">
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
              >
                AGIEL<br />
                <span className="text-white" style={{ color: 'white', textShadow: '3px 3px 0px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                  NAWAWI
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full">
              <div
                className="border-2 border-black bg-white p-6 md:p-8 relative flex flex-col justify-center text-left mt-2 lg:mt-4"
                style={{ boxShadow: '8px 8px 0px #000' }}
              >
                {/* Corner accent */}
                <div className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center font-black text-sm bg-yellow-400 border-2 border-black">
                  !
                </div>
                
                <h3
                  className="text-lg md:text-xl font-black mb-2 uppercase shrink-0"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {language === 'en' ? 'HELLO WORLD' : 'HALO DUNIA'}
                </h3>
                <div className="w-10 h-1 bg-black mb-4 shrink-0" />
                
                <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90" style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal)" }}>
                  {personal.shortBio}
                </p>
              </div>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Codeline Card */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col border-2 border-black overflow-hidden"
            style={{ background: "#0F172A", boxShadow: "10px 10px 0px #000" }}
          >
            {/* Terminal Top Bar */}
            <div className="w-full h-10 border-b-2 flex items-center px-4 gap-2" style={{ background: "#1E293B", borderColor: "#0F172A" }}>
              <div className="w-3.5 h-3.5 rounded-full border border-black bg-red-500"></div>
              <div className="w-3.5 h-3.5 rounded-full border border-black bg-yellow-500"></div>
              <div className="w-3.5 h-3.5 rounded-full border border-black bg-green-500"></div>
              <span className="ml-2 text-xs opacity-80" style={{ fontFamily: 'var(--font-mono)', color: 'white' }}>
                ~/agiel.dev
              </span>
              <span className="ml-auto text-[10px] opacity-60" style={{ fontFamily: 'var(--font-mono)', color: '#7DD3FC' }}>
                hero.tsx
              </span>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-6 py-12 md:px-8 md:py-16 w-full h-full">
              <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full flex flex-col items-center">
                <div
                  className="inline-block px-6 py-3 lg:px-8 lg:py-4 sticker-box"
                  style={{ background: "var(--color-orange)", color: "var(--color-charcoal)" }}
                >
                  <span className="font-bold text-sm md:text-base lg:text-xl tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    {personal.tagline}
                  </span>
                </div>
              </motion.div>

              <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="w-full flex flex-col items-center">
                <p className="text-[0.65rem] md:text-xs tracking-widest mb-3 opacity-90 uppercase font-bold text-center" style={{ fontFamily: "var(--font-mono)", color: "#7DD3FC" }}>
                  {language === 'en' ? 'Core Stack:' : 'Teknologi Utama:'}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  {topSkills.map(skill => (
                    <span key={skill.name} className="tech-tag text-xs md:text-sm lg:text-base px-3 md:px-4 py-1.5 md:py-2 font-bold" style={{ background: "#1E293B", color: "white", border: "2px solid #7DD3FC" }}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                custom={6}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
              >
                <a href="#projects" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold w-full sm:w-auto" style={{ background: "#7DD3FC", color: "#0F172A", border: "2px solid #7DD3FC" }} id="hero-cta-projects">
                  {language === 'en' ? 'VIEW PROJECTS' : 'LIHAT PROYEK'} <ArrowRight size={18} />
                </a>
                <a href="#contact" className="sticker-btn text-xs md:text-sm lg:text-base px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 font-bold w-full sm:w-auto" style={{ background: "transparent", color: "white", border: "2px solid white" }} id="hero-cta-contact">
                  {language === 'en' ? 'CONTACT ME' : 'HUBUNGI SAYA'} <Mail size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>

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
          {Array(8).fill(" ✦ FULL-STACK WEB DEVELOPMENT ✦ SCALABLE BACKEND ARCHITECTURE ✦ RESPONSIVE UI/UX ✦ CREATIVE PROBLEM SOLVING ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}