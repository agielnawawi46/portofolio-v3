import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const { experiences } = portfolioData

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const springBase = { type: 'spring' as const, stiffness: 65, damping: 18 }

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-16 md:py-24 px-6 overflow-hidden border-b-2 border-black"
      style={{ background: 'var(--color-canvas)' }}
      aria-label="Experience section"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="relative max-w-6xl mx-auto w-full z-10 flex flex-col justify-center">

        {/* Section Header - REVISI: Mengubah mb-28 menjadi mb-12 md:mb-16 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={inView ? { ...springBase } : {}}
          className="mb-14 md:mb-20 flex flex-col items-center text-center w-full"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MY <span style={{ color: 'var(--color-orange)' }}>JOURNEY</span>
          </h2>
          <div className="mt-3 h-1 w-12 mx-auto" style={{ background: 'var(--color-charcoal)' }} />
        </motion.div>

        {/* Timeline items - REVISI: Menghapus mt-6 agar tidak menambah spacing berlebih */}
        <div className="flex flex-col gap-6 w-full">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: (idx % 2 === 0 ? -40 : 40), y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={inView ? { ...springBase, delay: 0.15 + idx * 0.1 } : {}}
              className="border-2 border-black bg-white p-6 md:p-7 relative transition-transform hover:-translate-y-1 hover:-translate-x-1"
              style={{
                boxShadow: '8px 8px 0px #000',
              }}
            >
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 mb-3">
                <span className="bg-orange-500 text-black font-bold px-3 py-1 text-[0.7rem] border-2 border-black inline-block w-max tracking-widest uppercase">
                  {exp.period}
                </span>
                <span className="font-bold text-xs md:text-sm tracking-widest opacity-70">@ {exp.company}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
                {exp.role}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 pb-4 border-b-2 border-dashed border-gray-200">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 gap-y-2">
                {exp.highlights.map((hl, hi) => (
                  <div key={hi} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-orange-500 border border-black" />
                    <p className="text-xs md:text-sm leading-relaxed text-gray-600 font-medium">{hl}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}