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
  const { personal } = portfolioData[language]

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


      {/* Decorative Floating Stickers in Background */}
      <div className="hidden xl:flex items-center gap-2 absolute top-24 right-12 z-0 opacity-70 rotate-3 pointer-events-none select-none">
        <span className="px-3 py-1 bg-yellow-300 border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_#000]" style={{ fontFamily: 'var(--font-mono)' }}>
          ✦ 2026 EDITION
        </span>
      </div>
      <div className="hidden xl:flex items-center gap-2 absolute top-24 left-12 z-0 opacity-70 -rotate-3 pointer-events-none select-none">
        <span className="px-3 py-1 bg-white border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_#000]" style={{ fontFamily: 'var(--font-mono)' }}>
          ⚡ BUILD & SCALE
        </span>
      </div>

      {/* Container Utama */}
      <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-10 md:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 relative z-10">

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-10 lg:gap-14 w-full text-center lg:text-left">

          {/* KOLOM KIRI: Headline + Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2"
          >
            {/* Role Badge */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border-2 border-black font-bold text-xs uppercase tracking-wider bg-amber-300"
              style={{ fontFamily: 'var(--font-mono)', boxShadow: '3px 3px 0px #000' }}
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.tagline}</span>
            </motion.div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight w-full"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              <motion.div custom={1} variants={fadeUp}>AGIEL</motion.div>
              <motion.div custom={2} variants={fadeUp}>
                <span style={{ color: 'var(--color-orange)', textShadow: '4px 4px 0px #000' }}>
                  NAWAWI
                </span>
              </motion.div>
            </h1>

            <motion.div custom={3} variants={fadeUp} className="w-full">
              <div
                className="border-2 border-black bg-white p-6 md:p-7 relative flex flex-col justify-center text-left"
                style={{ boxShadow: '8px 8px 0px #000' }}
              >
                {/* Corner accent */}
                <motion.div custom={4} variants={fadeUp} className="absolute -top-3 -right-3 size-7 flex items-center justify-center font-black text-sm bg-yellow-400 border-2 border-black">
                  !
                </motion.div>
                
                <motion.h3
                  custom={5} variants={fadeUp}
                  className="text-lg md:text-xl font-black mb-2 uppercase shrink-0"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                >
                  {language === 'en' ? 'HELLO WORLD' : 'HALO DUNIA'}
                </motion.h3>
                <motion.div custom={6} variants={fadeUp} className="w-10 h-1 bg-black mb-3 shrink-0" />
                
                <motion.p custom={7} variants={fadeUp} className="text-sm md:text-base leading-relaxed opacity-90" style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal)" }}>
                  {personal.shortBio}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* KOLOM KANAN: Terminal Dev Console */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col border-2 border-black overflow-hidden justify-between"
            style={{ background: "#0F172A", boxShadow: "10px 10px 0px #000" }}
          >
            {/* Terminal Top Bar */}
            <div className="w-full h-10 border-b-2 flex items-center px-4 gap-2 shrink-0" style={{ background: "#1E293B", borderColor: "#0F172A" }}>
              <div className="size-3.5 rounded-full border border-black bg-red-500"></div>
              <div className="size-3.5 rounded-full border border-black bg-yellow-500"></div>
              <div className="size-3.5 rounded-full border border-black bg-green-500"></div>
              <span className="ml-2 text-xs opacity-80" style={{ fontFamily: 'var(--font-mono)', color: 'white' }}>
                ~/agiel.dev/console
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-400" style={{ fontFamily: 'var(--font-mono)' }}>
                  ONLINE
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col justify-between p-5 md:p-6 gap-4 text-left grow font-mono text-xs md:text-sm">
              
              {/* CLI Command & Spec Block */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">agiel@dev</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-amber-400 font-bold">~</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-white font-medium">cat dev-spec.json</span>
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 p-3 rounded-sm space-y-2 text-xs leading-relaxed">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-cyan-300 font-bold">"specialization":</span>
                    <span className="text-amber-300">
                      {language === 'en' ? '"Full-Stack Web Architecture"' : '"Arsitektur Web Full-Stack"'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    <span className="text-cyan-300 font-bold">"core_stack":</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Laravel', 'Next.js', 'Django', 'Tailwind', 'MySQL'].map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-bold bg-slate-800 text-sky-300 border border-slate-700 rounded-sm hover:border-sky-400 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-cyan-300 font-bold">"focus":</span>
                    <span className="text-emerald-300">
                      {language === 'en' ? '"Scalable APIs & Clean Interactive UI"' : '"API Skalabel & UI Responsif Interaktif"'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Mini Stat Cards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-900/80 border border-slate-700 p-2 text-center transition-transform hover:-translate-y-0.5">
                  <div className="text-base font-black text-amber-400" style={{ fontFamily: 'var(--font-display)' }}>10+</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{language === 'en' ? 'Projects' : 'Proyek'}</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 p-2 text-center transition-transform hover:-translate-y-0.5">
                  <div className="text-base font-black text-cyan-400" style={{ fontFamily: 'var(--font-display)' }}>100%</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{language === 'en' ? 'Commitment' : 'Komitmen'}</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 p-2 text-center transition-transform hover:-translate-y-0.5">
                  <div className="text-base font-black text-emerald-400" style={{ fontFamily: 'var(--font-display)' }}>End-to-End</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">{language === 'en' ? 'Workflow' : 'Alur Kerja'}</div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full">
                <motion.a
                  custom={9}
                  variants={fadeUp}
                  href="#projects"
                  className="sticker-btn text-xs md:text-sm px-5 py-3 flex items-center justify-center gap-2 font-bold w-full sm:w-1/2"
                  style={{ background: "#7DD3FC", color: "#0F172A", border: "2px solid #7DD3FC" }}
                  id="hero-cta-projects"
                >
                  {language === 'en' ? 'VIEW PROJECTS' : 'LIHAT PROYEK'} <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  custom={10}
                  variants={fadeUp}
                  href="#contact"
                  className="sticker-btn text-xs md:text-sm px-5 py-3 flex items-center justify-center gap-2 font-bold w-full sm:w-1/2"
                  style={{ background: "transparent", color: "white", border: "2px solid white" }}
                  id="hero-cta-contact"
                >
                  {language === 'en' ? 'CONTACT ME' : 'HUBUNGI SAYA'} <Mail size={16} />
                </motion.a>
              </div>

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
          {Array(8).fill(
            language === 'en'
              ? " ✦ FULL-STACK WEB DEVELOPMENT ✦ SCALABLE BACKEND ARCHITECTURE ✦ RESPONSIVE UI/UX ✦ CREATIVE PROBLEM SOLVING "
              : " ✦ PENGEMBANGAN WEB FULL-STACK ✦ ARSITEKTUR BACKEND SKALABEL ✦ UI/UX RESPONSIF ✦ SOLUSI KREATIF "
          ).map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}