import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, GitFork, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioData, type Project } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import ProjectModal from './ProjectModal'

const MOBILE_PER_PAGE = 2
const DESKTOP_PER_PAGE = 6

const categoryColors: Record<string, string> = {
  'Web App': 'var(--color-lavender)',
  'E-Commerce': 'var(--color-orange)',
  'Dashboard': 'var(--color-charcoal)',
  'Blog': 'var(--color-lavender)',
  'CLI Tool': 'var(--color-orange)',
  'UI Library': 'var(--color-lavender)',
}

const spring = { type: 'spring' as const, stiffness: 65, damping: 18 }
const vp = { once: false, amount: 0.1 }

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
}

// ── Shared Nav Controls ─────────────────────────────────
function PaginationControls({
  page,
  totalPages,
  onPrev,
  onNext,
  onDot,
}: {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  onDot: (i: number) => void
}) {
  const btnBase: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    border: '2px solid',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    transition: 'all 0.2s',
  }

  const prevDisabled = page === 0
  const nextDisabled = page === totalPages - 1

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* PREV */}
        <button
          onClick={onPrev}
          disabled={prevDisabled}
          style={{
            ...btnBase,
            cursor: prevDisabled ? 'not-allowed' : 'pointer',
            opacity: prevDisabled ? 0.3 : 1,
            background: prevDisabled ? 'transparent' : 'var(--color-orange)',
            color: prevDisabled ? 'rgba(255,255,255,0.5)' : '#0F172A',
            borderColor: prevDisabled ? 'rgba(255,255,255,0.2)' : 'var(--color-orange)',
            boxShadow: prevDisabled ? 'none' : '4px 4px 0px rgba(0,0,0,0.5)',
          }}
          aria-label="Previous page"
        >
          <ChevronLeft size={14} /> PREV
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => onDot(i)}
              style={{
                width: i === page ? '28px' : '10px',
                height: '10px',
                background: i === page ? 'var(--color-orange)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                padding: 0,
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          style={{
            ...btnBase,
            cursor: nextDisabled ? 'not-allowed' : 'pointer',
            opacity: nextDisabled ? 0.3 : 1,
            background: nextDisabled ? 'transparent' : 'var(--color-orange)',
            color: nextDisabled ? 'rgba(255,255,255,0.5)' : '#0F172A',
            borderColor: nextDisabled ? 'rgba(255,255,255,0.2)' : 'var(--color-orange)',
            boxShadow: nextDisabled ? 'none' : '4px 4px 0px rgba(0,0,0,0.5)',
          }}
          aria-label="Next page"
        >
          NEXT <ChevronRight size={14} />
        </button>
      </div>

      {/* Counter */}
      <p style={{
        fontSize: '11px',
        opacity: 0.4,
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-canvas)',
        letterSpacing: '0.1em',
      }}>
        {page + 1} / {totalPages}
      </p>
    </div>
  )
}

// ── Project Card ────────────────────────────────────────
function ProjectCard({
  project,
  globalIndex,
  onOpen,
  delay = 0,
  language,
}: {
  project: Project
  globalIndex: number
  onOpen: (p: Project) => void
  delay?: number
  language: 'en' | 'id'
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
              {language === 'en' ? 'VIEW DETAILS' : 'LIHAT DETAIL'}
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
                <GitFork size={12} /> {language === 'en' ? 'CODE' : 'KODE'}
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

// ── Main Section ────────────────────────────────────────
export default function ProjectsSection() {
  const { language } = useLanguage()
  const { projects } = portfolioData[language]

  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Separate page state per mode
  const [mobilePage, setMobilePage] = useState(0)
  const [desktopPage, setDesktopPage] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Mobile config
  const mTotalPages = Math.ceil(projects.length / MOBILE_PER_PAGE)
  const mVisible = projects.slice(mobilePage * MOBILE_PER_PAGE, mobilePage * MOBILE_PER_PAGE + MOBILE_PER_PAGE)

  // Desktop config
  const dTotalPages = Math.ceil(projects.length / DESKTOP_PER_PAGE)
  const dNeedsPagination = projects.length > DESKTOP_PER_PAGE
  const dVisible = projects.slice(desktopPage * DESKTOP_PER_PAGE, desktopPage * DESKTOP_PER_PAGE + DESKTOP_PER_PAGE)

  function navigate(
    current: number,
    total: number,
    delta: number,
    setter: (p: number) => void,
  ) {
    const next = current + delta
    if (next >= 0 && next < total) {
      setDirection(delta)
      setter(next)
    }
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative w-full flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 border-b-2 border-black"
        style={{ background: 'var(--color-charcoal)', color: 'var(--color-canvas)' }}
        aria-label="Projects section"
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(226,232,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        <div className="relative max-w-6xl mx-auto px-8 md:px-12 w-full z-10" style={{ marginBottom: '3.5rem' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={inView ? { ...spring } : {}}
            className="mb-12 md:mb-16 flex flex-col items-center text-center w-full"
            style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
            >
              {language === 'en' ? "WHAT I'VE " : 'YANG SAYA '}
              <span style={{ color: 'var(--color-orange)' }}>
                {language === 'en' ? 'BUILT' : 'BANGUN'}
              </span>
            </h2>
            <div className="mt-3 h-1.5 w-16 bg-white" />
          </motion.div>

          {isMobile ? (
            /* ── MOBILE: 2 per page ──────────── */
            <div>
              <div style={{ overflow: 'hidden', padding: '24px', margin: '-24px' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={mobilePage}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="px-4 sm:px-0"
                    style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                  >
                    {mVisible.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        globalIndex={mobilePage * MOBILE_PER_PAGE + i}
                        onOpen={setSelectedProject}
                        delay={i * 0.08}
                        language={language}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <PaginationControls
                page={mobilePage}
                totalPages={mTotalPages}
                onPrev={() => navigate(mobilePage, mTotalPages, -1, setMobilePage)}
                onNext={() => navigate(mobilePage, mTotalPages, 1, setMobilePage)}
                onDot={i => { setDirection(i > mobilePage ? 1 : -1); setMobilePage(i) }}
              />
            </div>

          ) : (
            /* ── DESKTOP: 6 per page, paginate only if > 6 ── */
            <div>
              <div style={{ overflow: 'hidden', padding: '24px', margin: '-24px' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={desktopPage}
                    custom={direction}
                    variants={dNeedsPagination ? slideVariants : undefined}
                    initial={dNeedsPagination ? 'enter' : { opacity: 0, y: 20 }}
                    animate={dNeedsPagination ? 'center' : { opacity: 1, y: 0 }}
                    exit={dNeedsPagination ? 'exit' : { opacity: 0, y: -20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '32px',
                    }}
                  >
                    {dVisible.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        globalIndex={desktopPage * DESKTOP_PER_PAGE + i}
                        onOpen={setSelectedProject}
                        delay={i * 0.07}
                        language={language}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination controls: hanya tampil jika proyek > 6 */}
              {dNeedsPagination && (
                <PaginationControls
                  page={desktopPage}
                  totalPages={dTotalPages}
                  onPrev={() => navigate(desktopPage, dTotalPages, -1, setDesktopPage)}
                  onNext={() => navigate(desktopPage, dTotalPages, 1, setDesktopPage)}
                  onDot={i => { setDirection(i > desktopPage ? 1 : -1); setDesktopPage(i) }}
                />
              )}
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}