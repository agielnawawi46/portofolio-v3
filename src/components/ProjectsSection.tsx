import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, GitFork, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioData, type Project } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

const { projects } = portfolioData

const categoryColors: Record<string, string> = {
  'Web App':    'var(--color-lavender)',
  'E-Commerce': 'var(--color-orange)',
  'Dashboard':  'var(--color-charcoal)',
  'Blog':       'var(--color-lavender)',
  'CLI Tool':   'var(--color-orange)',
  'UI Library': 'var(--color-lavender)',
}

const spring = { type: 'spring' as const, stiffness: 65, damping: 18 }
const vp     = { once: false, amount: 0.1 }

const MOBILE_PER_PAGE = 2

function ProjectCard({
  project,
  globalIndex,
  onOpen,
  delay = 0,
}: {
  project: Project
  globalIndex: number
  onOpen: (p: Project) => void
  delay?: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ ...spring, delay }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group cursor-pointer h-full"
      onClick={() => onOpen(project)}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(project)}
      role="button"
      aria-label={`Open ${project.title} details`}
    >
      <div
        className="h-full overflow-hidden flex flex-col border-2 border-black bg-white/5"
        style={{ boxShadow: '8px 8px 0px #000' }}
      >
        {/* Card header */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{
            background: categoryColors[project.category] || 'var(--color-lavender)',
            borderBottom: '2px solid #000',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />
          <div className="absolute top-3 left-3">
            <span className="tech-tag" style={{ background: 'rgba(15,23,42,0.8)', border: 'none', color: 'white', fontSize: '0.6rem' }}>
              {project.category}
            </span>
          </div>
          <span
            className="text-6xl font-black opacity-15 select-none relative"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            {String(globalIndex + 1).padStart(2, '0')}
          </span>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span
              className="px-3.5 py-2 text-[0.7rem] font-bold tracking-wider"
              style={{ background: 'var(--color-charcoal)', color: 'white', fontFamily: 'var(--font-display)', border: '2px solid rgba(255,255,255,0.7)' }}
            >
              VIEW DETAILS
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            <h3
              className="text-lg font-black uppercase mb-3 leading-tight group-hover:text-orange-400 transition-colors"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
            >
              {project.title}
            </h3>
            <p
              className="text-xs leading-relaxed opacity-70 line-clamp-3"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-canvas)' }}
            >
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="tech-tag text-xs px-2.5 py-1">{tech}</span>
              ))}
              {project.techStack.length > 3 && (
                <span className="tech-tag text-xs px-2.5 py-1" style={{ opacity: 0.4 }}>
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            <div
              className="flex gap-4 pt-3"
              style={{ borderTop: '1px solid rgba(226,232,240,0.12)' }}
              onClick={e => e.stopPropagation()}
            >
              <a
                href={project.githubUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-canvas)', fontFamily: 'var(--font-mono)' }}
                id={`project-github-${project.id}`}
              >
                <GitFork size={12} /> CODE
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-orange)', fontFamily: 'var(--font-mono)' }}
                id={`project-demo-${project.id}`}
              >
                <ExternalLink size={12} /> DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isMobile, setIsMobile]               = useState(false)
  const [page, setPage]                       = useState(0)
  const [direction, setDirection]             = useState(1)

  // Detect mobile on mount and resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const totalPages      = Math.ceil(projects.length / MOBILE_PER_PAGE)
  const visibleProjects = projects.slice(page * MOBILE_PER_PAGE, page * MOBILE_PER_PAGE + MOBILE_PER_PAGE)

  function goNext() {
    if (page < totalPages - 1) { setDirection(1); setPage(p => p + 1) }
  }
  function goPrev() {
    if (page > 0) { setDirection(-1); setPage(p => p - 1) }
  }

  const slideVariants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ?  60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 :  60 }),
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 border-b-2 border-black"
        style={{ background: 'var(--color-charcoal)', color: 'var(--color-canvas)' }}
        aria-label="Projects section"
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(226,232,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={inView ? { ...spring } : {}}
            className="mb-12 md:mb-16 flex flex-col items-center text-center"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
            >
              WHAT I'VE <span style={{ color: 'var(--color-orange)' }}>BUILT</span>
            </h2>
          </motion.div>

          {/* ──────────────────────────────────────────
              MOBILE  (<640px): 2 cards + Prev/Next
          ────────────────────────────────────────── */}
          {isMobile ? (
            <div>
              {/* Sliding cards */}
              <div style={{ overflow: 'hidden' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                  >
                    {visibleProjects.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        globalIndex={page * MOBILE_PER_PAGE + i}
                        onOpen={setSelectedProject}
                        delay={i * 0.08}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px' }}>
                {/* PREV button */}
                <button
                  onClick={goPrev}
                  disabled={page === 0}
                  style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '8px',
                    padding:      '10px 16px',
                    border:       '2px solid',
                    fontFamily:   'var(--font-mono)',
                    fontSize:     '11px',
                    fontWeight:   '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor:       page === 0 ? 'not-allowed' : 'pointer',
                    opacity:      page === 0 ? 0.3 : 1,
                    background:   page === 0 ? 'transparent' : 'var(--color-orange)',
                    color:        page === 0 ? 'rgba(255,255,255,0.5)' : '#0F172A',
                    borderColor:  page === 0 ? 'rgba(255,255,255,0.2)' : 'var(--color-orange)',
                    boxShadow:    page === 0 ? 'none' : '4px 4px 0px rgba(0,0,0,0.5)',
                    transition:   'all 0.2s',
                  }}
                >
                  <ChevronLeft size={14} /> PREV
                </button>

                {/* Dot indicators */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > page ? 1 : -1); setPage(i) }}
                      style={{
                        width:      i === page ? '28px' : '10px',
                        height:     '10px',
                        background: i === page ? 'var(--color-orange)' : 'rgba(255,255,255,0.3)',
                        border:     'none',
                        cursor:     'pointer',
                        transition: 'all 0.2s',
                        padding:    0,
                      }}
                      aria-label={`Page ${i + 1}`}
                    />
                  ))}
                </div>

                {/* NEXT button */}
                <button
                  onClick={goNext}
                  disabled={page === totalPages - 1}
                  style={{
                    display:       'flex',
                    alignItems:    'center',
                    gap:           '8px',
                    padding:       '10px 16px',
                    border:        '2px solid',
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '11px',
                    fontWeight:    '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor:        page === totalPages - 1 ? 'not-allowed' : 'pointer',
                    opacity:       page === totalPages - 1 ? 0.3 : 1,
                    background:    page === totalPages - 1 ? 'transparent' : 'var(--color-orange)',
                    color:         page === totalPages - 1 ? 'rgba(255,255,255,0.5)' : '#0F172A',
                    borderColor:   page === totalPages - 1 ? 'rgba(255,255,255,0.2)' : 'var(--color-orange)',
                    boxShadow:     page === totalPages - 1 ? 'none' : '4px 4px 0px rgba(0,0,0,0.5)',
                    transition:    'all 0.2s',
                  }}
                >
                  NEXT <ChevronRight size={14} />
                </button>
              </div>

              {/* Page counter */}
              <p style={{
                textAlign:    'center',
                marginTop:    '12px',
                fontSize:     '11px',
                opacity:      0.4,
                fontFamily:   'var(--font-mono)',
                color:        'var(--color-canvas)',
                letterSpacing: '0.1em',
              }}>
                {page + 1} / {totalPages}
              </p>
            </div>

          ) : (
          /* ──────────────────────────────────────────
              TABLET/DESKTOP (≥640px): full grid
              3 kolom × N baris, semua proyek tampil
          ────────────────────────────────────────── */
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap:                 '32px',
              }}
            >
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  globalIndex={i}
                  onOpen={setSelectedProject}
                  delay={i * 0.08}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}