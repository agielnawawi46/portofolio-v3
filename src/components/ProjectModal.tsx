import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tag, ExternalLink, GitFork, X, Rocket } from 'lucide-react'
import type { Project } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage()
  const [showToast, setShowToast] = useState(false)

  const handleDemoClick = (e: React.MouseEvent, url: string) => {
    if (url === '#') {
      e.preventDefault()
      setShowToast(true)
    }
  }

  useEffect(() => {
    if (!showToast) return
    const t = setTimeout(() => setShowToast(false), 3500)
    return () => clearTimeout(t)
  }, [showToast])

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      <AnimatePresence>
        {project && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(4px)' }}
              aria-hidden="true"
            />

            {/* Scroll container — allows modal to scroll on small screens */}
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
            {/* Centering wrapper */}
            <div
              className="flex min-h-full items-center justify-center p-4 sm:p-8"
              onClick={onClose}
            >
              {/* Modal box — height is purely auto / fit-content */}
              <div
                className="relative w-full"
                style={{
                  background: 'var(--color-canvas)',
                  border: '3px solid var(--color-border)',
                  boxShadow: '8px 8px 0px var(--color-border)',
                  maxWidth: '900px',
                }}
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div
                  className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
                  style={{
                    background: 'var(--color-charcoal)',
                    borderBottom: '3px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs tracking-widest font-bold"
                      style={{ fontFamily: 'var(--font-mono)', color: 'rgba(226,232,240,0.5)' }}
                    >
                      {language === 'en' ? 'PROJECT DETAIL' : 'DETAIL PROYEK'}
                    </span>
                    <span
                      className="h-4 w-px"
                      style={{ background: 'rgba(226,232,240,0.2)' }}
                    />
                    <h2
                      className="text-base font-black uppercase"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  <button
                    id="modal-close-btn"
                    onClick={onClose}
                    className="w-9 h-9 flex items-center justify-center transition-colors"
                    style={{
                      border: '2px solid rgba(226,232,240,0.3)',
                      color: 'var(--color-canvas)',
                      background: 'transparent',
                    }}
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8">
                  {/* Hero Color Block */}
                  <div
                    className="w-full h-48 sm:h-64 flex items-center justify-center relative overflow-hidden mb-8 sticker-box"
                    style={{ background: 'var(--color-lavender)' }}
                  >
                    <div className="absolute inset-0 grid-bg" />
                    <div
                      className="relative text-7xl sm:text-8xl font-black opacity-20 select-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="tech-tag"
                        style={{ background: 'var(--color-charcoal)', color: 'white' }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Coming Soon overlay inside grid */}
                    <AnimatePresence>
                      {showToast && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                          className="absolute inset-0 flex flex-col items-center justify-center z-10"
                          style={{ background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(3px)' }}
                        >
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '16px 24px',
                            background: '#0F172A',
                            border: '2px solid var(--color-orange)',
                            boxShadow: '5px 5px 0px var(--color-orange)',
                          }}>
                            {/* Icon */}
                            <div style={{ flexShrink: 0 }}>
                              <Rocket size={24} color="var(--color-orange)" />
                            </div>
                            
                            {/* Text */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                              <p style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: '900',
                                fontSize: '0.85rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'var(--color-orange)',
                                marginBottom: '2px',
                              }}>
                                {language === 'en' ? 'Coming Soon!' : 'Segera Hadir!'}
                              </p>
                              <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.7rem',
                                color: 'rgba(226,232,240,0.65)',
                              }}>
                                {language === 'en'
                                  ? 'Not deployed yet. Stay tuned!'
                                  : 'Belum terdeploy. Pantau terus!'}
                              </p>
                            </div>
                          </div>
                          {/* Progress bar */}
                          <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 3.5, ease: 'linear' }}
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              height: '3px',
                              width: '100%',
                              background: 'var(--color-orange)',
                              transformOrigin: 'left',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <h3
                        className="text-2xl font-black uppercase mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed opacity-75 mb-6"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {project.longDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag size={13} />
                          <span
                            className="text-xs font-bold tracking-widest uppercase"
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            {language === 'en' ? 'Tech Stack' : 'Teknologi'}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map(tech => (
                            <span key={tech} className="tech-tag" style={{ fontSize: '0.7rem' }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                      {/* Action Buttons */}
                      <div
                        className="sticker-box p-4"
                        style={{ background: 'var(--color-canvas)' }}
                      >
                        <p
                          className="text-xs font-bold tracking-widest mb-3 uppercase opacity-50"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {language === 'en' ? 'Links' : 'Tautan'}
                        </p>
                        <div className="flex flex-col gap-2">
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`modal-demo-${project.id}`}
                            className="sticker-btn sticker-btn-secondary w-full justify-center"
                            style={{ textAlign: 'center' }}
                            onClick={(e) => handleDemoClick(e, project.liveDemoUrl)}
                          >
                            <ExternalLink size={14} /> DEMO
                          </a>
                          {project.githubUrl2 ? (
                            <div className="flex gap-1">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                id={`modal-github-${project.id}`}
                                className="sticker-btn sticker-btn-primary flex-1 justify-center"
                                style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}
                              >
                                <GitFork size={11} /> FRONTEND
                              </a>
                              <a
                                href={project.githubUrl2}
                                target="_blank"
                                rel="noopener noreferrer"
                                id={`modal-github2-${project.id}`}
                                className="sticker-btn sticker-btn-primary flex-1 justify-center"
                                style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}
                              >
                                <GitFork size={11} /> BACKEND
                              </a>
                            </div>
                          ) : (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              id={`modal-github-${project.id}`}
                              className="sticker-btn sticker-btn-primary w-full justify-center"
                            >
                              <GitFork size={14} /> {language === 'en' ? 'SOURCE CODE' : 'KODE SUMBER'}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Meta */}
                      <div
                        className="sticker-box p-4"
                        style={{ background: 'var(--color-canvas)' }}
                      >
                        <p
                          className="text-xs font-bold tracking-widest mb-3 uppercase opacity-50"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Info
                        </p>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2">
                          <div>
                            <span className="text-xs opacity-40" style={{ fontFamily: 'var(--font-mono)' }}>
                              {language === 'en' ? 'Category' : 'Kategori'}
                            </span>
                            <p className="text-sm font-bold mt-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                              {project.category}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs opacity-40" style={{ fontFamily: 'var(--font-mono)' }}>
                              {language === 'en' ? 'Stack Count' : 'Jumlah Teknologi'}
                            </span>
                            <p className="text-sm font-bold mt-0.5" style={{ fontFamily: 'var(--font-display)' }}>
                              {project.techStack.length} {language === 'en' ? 'Technologies' : 'Teknologi'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* end modal box */}
            </div>{/* end centering wrapper */}
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </>
  )
}
