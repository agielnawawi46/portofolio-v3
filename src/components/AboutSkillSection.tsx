import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const { skills } = portfolioData

const categories = ['Frontend', 'Backend', 'Tools']

export default function AboutSkillSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const springBase  = { type: 'spring' as const, stiffness: 65, damping: 18 }
  const springScale = { type: 'spring' as const, stiffness: 200, damping: 22 }

  return (
    <section
      id="about"
      ref={ref}
      /* REVISI 1: Sesuaikan padding vertikal agar posisi terpusat lebih seimbang */
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 md:py-28 px-6 overflow-hidden border-b-2 border-black"
      style={{ background: 'var(--color-canvas)' }}
      aria-label="About and Skills section"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      {/* Wrapping Container */}
      <div className="relative max-w-6xl mx-auto w-full z-10 flex flex-col justify-center">

        {/* Section Header - REVISI 2: Ubah mb-28 menjadi mb-10 md:mb-14 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={inView ? { ...springBase } : {}}
          className="mb-10 md:mb-14 flex flex-col items-center text-center w-full"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE <span style={{ color: 'var(--color-orange)' }}>TOOLKIT</span>
          </h2>
          <div className="mt-3 h-1.5 w-16 mx-auto bg-black" />
        </motion.div>

        {/* Bio + Stats Grid - REVISI 3: Memperbesar gap ke gap-8 md:gap-10 dan margin bawah mb-16 md:mb-20 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mb-16 md:mb-20 items-stretch">

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={inView ? { ...springBase, delay: 0.1 } : {}}
            className="lg:col-span-7 flex"
          >
            <div className="border-2 border-black bg-white p-6 md:p-8 relative shadow-[8px_8px_0px_#000] flex flex-col justify-between w-full">
              <div
                className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center font-black text-sm bg-orange-500 border-2 border-black"
              >
                ×
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  WHO AM I?
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-800 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Saya adalah mahasiswa D3 Teknik Informatika di Politeknik Negeri Batam yang berfokus pada Web Development dan Software Engineering.
                  <br /><br />
                  Saya berpengalaman membangun proyek-proyek menggunakan Laravel, Django, Node.js, PHP, Python, MySQL, dan REST APIs, dengan fokus pada aksesibilitas dan integrasi sistem.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-gray-300 flex flex-wrap gap-2.5">
                {['Batam, Indonesia', 'Web Development', 'Software Engineering'].map(tag => (
                  <span key={tag} className="section-badge text-xs md:text-sm py-1 px-3" style={{ fontFamily: 'var(--font-mono)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Cards - REVISI 4: Memperbesar gap internal ke gap-5 md:gap-6 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={inView ? { ...springBase, delay: 0.15 } : {}}
            className="lg:col-span-5 grid grid-cols-2 gap-5 md:gap-6"
          >
            {[
              { value: '4+', label: 'Projects', color: '#DDD6FE' },
              { value: '4', label: 'Semester', color: '#F97316' },
              { value: '16', label: 'Tech Stack', color: '#0F172A', tc: '#FFF' },
              { value: '2+', label: 'Databases', color: '#DDD6FE' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={inView ? { ...springScale, delay: 0.2 + i * 0.07 } : {}}
                className="border-2 border-black p-5 md:p-6 flex flex-col justify-center items-start gap-1 shadow-[8px_8px_0px_#000] min-h-[130px]"
                style={{ background: s.color }}
              >
                <span className="text-3xl md:text-5xl font-black leading-none mb-1" style={{ fontFamily: 'var(--font-display)', color: s.tc || '#0F172A' }}>
                  {s.value}
                </span>
                <span className="text-xs md:text-sm font-bold tracking-wider uppercase" style={{ fontFamily: 'var(--font-mono)', color: s.tc || '#0F172A', opacity: 0.8 }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section - REVISI 5: Atur jarak kategori (space-y-8 md:space-y-10) */}
        <div className="space-y-8 md:space-y-10">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter(s => s.category === cat)
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={inView ? { ...springBase, delay: 0.2 + catIdx * 0.1 } : {}}
              >
                {/* Category label */}
                <div className="mb-4">
                  <span className="bg-black text-white px-4 py-1.5 font-bold text-xs md:text-sm uppercase tracking-wider inline-block">
                    {cat}
                  </span>
                </div>

                {/* Skill cards grid - REVISI 6: Penyesuaian grid (grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5) & gap-5 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                  {catSkills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={inView ? { ...springBase, delay: 0.3 + catIdx * 0.07 + si * 0.04 } : {}}
                      className="border-2 border-black bg-white p-4 shadow-[5px_5px_0px_#000]"
                    >
                      <div className="flex justify-between items-center font-bold text-xs md:text-sm mb-2.5">
                        <span className="uppercase tracking-tight truncate pr-1" style={{ fontFamily: 'var(--font-display)' }}>{skill.name}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-orange)' }}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 border border-black">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.4 + catIdx * 0.07 + si * 0.04, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                          className="bg-orange-500 h-full border-r border-black"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}