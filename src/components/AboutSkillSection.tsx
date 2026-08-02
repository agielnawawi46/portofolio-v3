import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const { skills, personal } = portfolioData

const categories = ['Frontend', 'Backend', 'Tools']

// --- Terminal Data ---
const codeLines = [
  { content: "// agiel.dev — Portfolio v3.0", type: "comment" },
  { content: "const developer = {", type: "default" },
  { content: `  name: "${personal.name}",`, type: "green" },
  { content: `  role: "Web Developer",`, type: "green" },
  { content: `  education: "Politeknik Negeri Batam",`, type: "purple" },
  { content: `  location: "${personal.location}",`, type: "orange" },
  { content: "  skills: [", type: "default" },
  { content: `    "Laravel", "Django", "Node.js",`, type: "yellow" },
  { content: `    "React", "TypeScript", "MySQL"`, type: "yellow" },
  { content: "  ],", type: "default" },
  { content: `  contact: "${personal.email}",`, type: "green" },
  { content: "  available: true,", type: "orange" },
  { content: "};", type: "default" },
  { content: "", type: "default" },
  { content: "export default developer;", type: "green" },
]

const spring = { type: 'spring' as const, stiffness: 65, damping: 18 }
const springScale = { type: 'spring' as const, stiffness: 200, damping: 22 }
const vp = { once: false, amount: 0.1 }

const statItems = [
  { value: '4+', label: 'Projects', bg: '#F97316', tc: '#0F172A' },
  { value: '4', label: 'Semester', bg: '#DDD6FE', tc: '#0F172A' },
  { value: '16+', label: 'Tech Stack', bg: '#0F172A', tc: '#FFFFFF' },
  { value: '2+', label: 'Databases', bg: '#FFFFFF', tc: '#0F172A' },
]

export default function AboutSkillSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const filteredSkills = skills.filter(s => s.category === activeCategory)

  return (
    <section
      id="about"
      className="relative w-full flex flex-col border-b-2 border-black overflow-hidden"
      style={{ background: 'var(--color-canvas)' }}
      aria-label="About and Skills section"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      {/* ══════════════════════════════════════════
          PART 1 — IDENTITY + BIO
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full py-28 md:py-36">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10" style={{ marginBottom: '3.5rem' }}>

          {/* Section header — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ ...spring }}
            className="mb-12 lg:mb-16 flex flex-col items-center text-center w-full"
            style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ABOUT <span style={{ color: 'var(--color-orange)' }}>ME</span>
            </h2>
            <div className="mt-3 h-1.5 w-16 bg-black" />
          </motion.div>

          {/* Photo for Mobile — hidden on desktop, shown below title on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ ...spring, delay: 0.1 }}
            className="lg:hidden flex justify-center w-full"
            style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
          >
            <div
              className="w-40 sm:w-48 border-2 border-black overflow-hidden"
              style={{ boxShadow: '6px 6px 0px #000', aspectRatio: '1/1.2' }}
            >
              <img
                src="/foto.jpg"
                alt="Agiel Nawawi"
                className="w-full h-full object-cover object-top"
                style={{ background: 'var(--color-lavender)' }}
              />
            </div>
          </motion.div>

          {/* Two-column grid: Terminal | Bio + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

            {/* ── LEFT: Terminal ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ ...spring, delay: 0.1 }}
              className="relative"
            >
              {/* Photo overlay — hidden on mobile, shown on lg+ only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp}
                transition={{ ...spring, delay: 0.6 }}
                className="hidden lg:block absolute -right-6 -bottom-8 z-10"
              >
                <div
                  className="w-44 border-2 border-black overflow-hidden"
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

              {/* Terminal window */}
              <div
                className="border-2 border-black overflow-hidden w-full"
                style={{ background: '#0F172A', boxShadow: '10px 10px 0px #000' }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 border-b-2"
                  style={{ background: '#1E293B', borderColor: '#0F172A' }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} />
                  <span className="ml-2 text-xs opacity-60" style={{ fontFamily: 'var(--font-mono)', color: 'white' }}>
                    ~/agiel.dev
                  </span>
                  <span className="ml-auto text-[10px] opacity-40" style={{ fontFamily: 'var(--font-mono)', color: '#7DD3FC' }}>
                    developer.ts
                  </span>
                </div>

                {/* Code content — pb only on lg+ to make room for the photo overlay */}
                <div className="code-terminal p-4 md:p-5 lg:p-6 lg:pb-48">
                  <div className="flex flex-col gap-1 md:gap-1.5">
                    {codeLines.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={vp}
                        transition={{ ...spring, delay: 0.15 + idx * 0.07 }}
                        className={`font-mono text-[10px] sm:text-xs md:text-sm whitespace-pre ct-${line.type}`}
                      >
                        {line.content || '\u00A0'}
                      </motion.div>
                    ))}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                      className="inline-block w-1.5 h-3 md:h-4 align-middle mt-1"
                      style={{ background: '#7DD3FC' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Bio Card + Stats ── */}
            <div className="flex flex-col gap-5">

              {/* Bio card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ ...spring, delay: 0.2 }}
              >
                <div
                  className="border-2 border-black bg-white p-6 md:p-8 relative"
                  style={{ boxShadow: '8px 8px 0px #000' }}
                >
                  {/* Corner accent */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center font-black text-sm bg-orange-500 border-2 border-black">
                    ×
                  </div>

                  <h3
                    className="text-lg md:text-xl font-black mb-1 uppercase"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    WHO AM I?
                  </h3>
                  <div className="h-0.5 w-10 bg-orange-500 mb-4" />
                  <p
                    className="text-sm md:text-base leading-relaxed text-gray-800 mb-5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    I am an Informatics Engineering Diploma student at Politeknik Negeri Batam, focusing on <strong>Web Development</strong> and <strong>Software Engineering</strong>.
                    <br /><br />
                    I have experience building projects using <strong>Laravel, Django, Node.js, PHP, Python, MySQL, and REST APIs</strong>, with a strong emphasis on accessibility and system integration.
                  </p>
                  <div className="pt-4 border-t-2 border-dashed border-gray-200 flex flex-wrap gap-2">
                    {['Batam, Indonesia', 'Web Development', 'Open to Work'].map(tag => (
                      <span
                        key={tag}
                        className="section-badge text-xs py-1 px-3"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid — 2 cols on mobile, 4 on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {statItems.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={vp}
                    transition={{ ...springScale, delay: 0.3 + i * 0.08 }}
                    className="border-2 border-black p-4 flex flex-col justify-center items-center gap-1 min-h-[90px]"
                    style={{ background: s.bg, boxShadow: '6px 6px 0px #000' }}
                  >
                    <span
                      className="text-2xl md:text-3xl font-black leading-none"
                      style={{ fontFamily: 'var(--font-display)', color: s.tc }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-center"
                      style={{ fontFamily: 'var(--font-mono)', color: s.tc, opacity: 0.8 }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>{/* end RIGHT */}
          </div>{/* end two-column grid */}
        </div>{/* end max-w-6xl */}
      </div>{/* end PART 1 */}

      {/* ══════════════════════════════════════════
          PART 2 — TOOLKIT (dark panel)
      ══════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full border-t-2 border-black"
        style={{ background: 'var(--color-charcoal)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(226,232,240,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        <div className="relative flex flex-col justify-center items-center w-full py-28 md:py-36">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10" style={{ marginBottom: '3.5rem' }}>

            {/* Title + Filter Tabs — centered stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ ...spring }}
              className="flex flex-col items-center text-center mb-12 md:mb-16"
              style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
            >
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                THE <span style={{ color: 'var(--color-orange)' }}>TOOLKIT</span>
              </h3>
              <div className="mt-3 mb-10 h-1.5 w-16 bg-white" />

              {/* Category Tabs */}
              <div className="flex gap-3 md:gap-4 flex-wrap justify-center" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-8 md:px-12 py-3.5 md:py-5 text-sm md:text-base font-black uppercase tracking-widest border-2 border-black transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      background: activeCategory === cat ? 'var(--color-orange)' : 'var(--color-canvas)',
                      color: 'var(--color-charcoal)',
                      boxShadow: '4px 4px 0px #000',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filteredSkills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ ...spring, delay: si * 0.05 }}
                  className="group border-2 p-4 relative overflow-hidden cursor-default"
                  style={{
                    background: '#1E293B',
                    borderColor: 'rgba(255,255,255,0.1)',
                    boxShadow: '5px 5px 0px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Hover orange fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'var(--color-orange)', zIndex: 0 }}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className="text-xs md:text-sm font-black uppercase tracking-tight group-hover:text-black transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-display)', color: 'white' }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs font-bold group-hover:text-black transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-orange)' }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className="w-full h-1.5 border border-white/20 group-hover:border-black/30 transition-colors duration-200"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={vp}
                        transition={{ delay: 0.1 + si * 0.04, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="h-full group-hover:bg-black transition-colors duration-200"
                        style={{ background: 'var(--color-orange)' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>{/* end max-w-6xl */}
        </div>{/* end centering wrapper */}
      </div>{/* end PART 2 */}

    </section>
  )
}