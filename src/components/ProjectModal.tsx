import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tag, ExternalLink, GitFork, X, CheckCircle2, Layers } from 'lucide-react'
import type { Project } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import ComingSoonToast from './ComingSoonToast'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const categoryColors: Record<string, string> = {
  'Web App': '#ffffff',
  'E-Commerce': '#ffffff',
  'Dashboard': 'var(--color-charcoal)',
  'Blog': '#ffffff',
  'CLI Tool': 'var(--color-orange)',
  'UI Library': '#ffffff',
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
      <ComingSoonToast
        visible={showToast}
        onClose={() => setShowToast(false)}
        language={language}
      />

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
              style={{ background: 'rgba(15,23,42,0.82)', backdropFilter: 'blur(6px)' }}
              aria-hidden="true"
            />

            {/* Scroll container */}
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} details`}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              {/* Centering wrapper */}
              <div className="flex min-h-full items-center justify-center p-3 sm:p-6 md:p-8">
                {/* Accessible backdrop click dismiss */}
                <button
                  type="button"
                  aria-label="Close modal backdrop"
                  tabIndex={-1}
                  onClick={onClose}
                  className="fixed inset-0 size-full cursor-default border-0 p-0 bg-transparent"
                />

                {/* Modal box */}
                <div
                  className="relative z-10 w-full overflow-hidden"
                  style={{
                    background: 'var(--color-canvas)',
                    border: '3px solid #000',
                    boxShadow: '10px 10px 0px #000',
                    maxWidth: '920px',
                  }}
                >
                  {/* Modal Header — Signature Terminal Top Bar */}
                  <div
                    className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 border-b-3 border-black"
                    style={{ background: '#0F172A' }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Window Controls (Red, Yellow, Green) */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="size-3 rounded-full bg-red-500 border border-black inline-block" />
                        <span className="size-3 rounded-full bg-yellow-500 border border-black inline-block" />
                        <span className="size-3 rounded-full bg-green-500 border border-black inline-block" />
                      </div>
                      <span className="h-4 w-px bg-white/20 shrink-0" />
                      <span
                        className="text-xs tracking-widest font-bold text-white uppercase truncate"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        ~/projects/{project.id}.tsx
                      </span>
                    </div>

                    {/* Neobrutalist Close Button */}
                    <button
                      id="modal-close-btn"
                      onClick={onClose}
                      className="size-8 shrink-0 flex items-center justify-center font-black text-black bg-orange-500 hover:bg-red-500 hover:text-white border-2 border-black transition-all cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
                      aria-label="Close modal"
                    >
                      <X size={16} strokeWidth={3} />
                    </button>
                  </div>

                  {/* Project Visual Showcase Banner */}
                  {/* Project Visual Showcase Banner — EXACTLY LIKE CARD IN PROJECTS */}
                  <div
                    className="relative w-full h-56 sm:h-64 md:h-72 flex items-center justify-center overflow-hidden border-b-3 border-black"
                    style={{
                      backgroundColor: categoryColors[project.category] || '#ffffff',
                    }}
                  >
                    {/* Grid Pattern Background exactly matching card in ProjectsSection */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)',
                        backgroundSize: '22px 22px',
                      }}
                    />

                    {/* Category Badge - Top Left (matching Image 2) */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className="tech-tag"
                        style={{
                          background: 'rgba(15,23,42,0.9)',
                          border: 'none',
                          color: 'white',
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge - Top Right */}
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border border-black/30"
                        style={{
                          background: project.liveDemoUrl !== '#' ? '#16A34A' : '#1E293B',
                          color: 'white',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <span className="size-1.5 rounded-full bg-white animate-pulse" />
                        {project.liveDemoUrl !== '#'
                          ? (language === 'en' ? 'LIVE NOW' : 'ONLINE')
                          : (language === 'en' ? 'READY (LOCAL)' : 'SIAP (BELUM DEPLOY)')}
                      </span>
                    </div>

                    {/* Project Logo / Screenshot without box background */}
                    {project.image ? (
                      <div className="relative z-10 size-full flex items-center justify-center p-8 sm:p-12">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-h-full max-w-[80%] object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="relative text-7xl sm:text-8xl font-black opacity-20 select-none"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-8">
                    {/* Title + Action Buttons Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b-2 border-dashed border-black/20">
                      <div className="min-w-0">
                        <h2
                          className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                        >
                          {project.title}
                        </h2>
                        <p
                          className="text-sm sm:text-base font-medium mt-1 text-gray-700"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Primary Actions */}
                      <div className="flex items-center gap-2.5 flex-wrap shrink-0">
                        {/* Demo Link */}
                        <a
                          href={project.liveDemoUrl}
                          target={project.liveDemoUrl !== '#' ? '_blank' : undefined}
                          rel={project.liveDemoUrl !== '#' ? 'noopener noreferrer' : undefined}
                          id={`modal-demo-${project.id}`}
                          onClick={(e) => handleDemoClick(e, project.liveDemoUrl)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                          style={{
                            background: 'var(--color-orange)',
                            color: 'var(--color-charcoal)',
                            boxShadow: '4px 4px 0px #000',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          <ExternalLink size={14} /> {language === 'en' ? 'LIVE DEMO' : 'LIHAT DEMO'}
                        </a>

                        {/* GitHub Buttons */}
                        {project.githubUrl2 ? (
                          <>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              id={`modal-github-${project.id}`}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black bg-white hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 text-black"
                              style={{
                                boxShadow: '4px 4px 0px #000',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              <GitFork size={13} /> FRONTEND
                            </a>
                            <a
                              href={project.githubUrl2}
                              target="_blank"
                              rel="noopener noreferrer"
                              id={`modal-github2-${project.id}`}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black bg-white hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 text-black"
                              style={{
                                boxShadow: '4px 4px 0px #000',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              <GitFork size={13} /> BACKEND
                            </a>
                          </>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`modal-github-${project.id}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black bg-white hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 text-black"
                            style={{
                              boxShadow: '4px 4px 0px #000',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            <GitFork size={14} /> {language === 'en' ? 'SOURCE CODE' : 'KODE SUMBER'}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Detailed Content Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left Column: Long Description & Highlights (7 cols) */}
                      <div className="lg:col-span-7 flex flex-col gap-6">
                        <div>
                          <h3
                            className="text-base sm:text-lg font-black uppercase tracking-wider flex items-center gap-2 mb-3"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
                          >
                            <span className="size-2 bg-orange-500 border border-black inline-block" />
                            {language === 'en' ? 'PROJECT OVERVIEW' : 'TENTANG PROYEK'}
                          </h3>
                          <p
                            className="text-sm sm:text-base leading-relaxed text-gray-800"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {project.longDescription}
                          </p>
                        </div>

                        {/* Key Highlights Card */}
                        <div
                          className="p-5 border-2 border-black bg-white"
                          style={{ boxShadow: '6px 6px 0px #000' }}
                        >
                          <h4
                            className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            <CheckCircle2 size={14} color="var(--color-orange)" />
                            {language === 'en' ? 'KEY FOCUS & ARCHITECTURE' : 'FOKUS UTAMA & ARSITEKTUR'}
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                            <li className="flex items-start gap-2.5">
                              <span className="size-1.5 mt-1.5 bg-orange-500 border border-black shrink-0" />
                              <span>
                                {language === 'en'
                                  ? 'Clean, modular application design with clear separation of concerns.'
                                  : 'Desain aplikasi modular dan terstruktur dengan pemisahan komponen yang bersih.'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="size-1.5 mt-1.5 bg-orange-500 border border-black shrink-0" />
                              <span>
                                {language === 'en'
                                  ? 'Robust database schema and optimized query processing.'
                                  : 'Struktur relasi database yang rapi serta eksekusi query data yang efisien.'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <span className="size-1.5 mt-1.5 bg-orange-500 border border-black shrink-0" />
                              <span>
                                {language === 'en'
                                  ? 'Fully responsive UI tailored with interactive user experience.'
                                  : 'Tampilan UI sepenuhnya responsif di semua perangkat dengan UX interaktif.'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column: Tech Stack & Specifications (5 cols) */}
                      <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Technologies Box */}
                        <div
                          className="p-5 border-2 border-black bg-white"
                          style={{ boxShadow: '6px 6px 0px #000' }}
                        >
                          <h3
                            className="text-xs font-black uppercase tracking-widest text-black mb-3 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            <Tag size={13} color="var(--color-orange)" />
                            {language === 'en' ? 'TECH STACK' : 'TEKNOLOGI DIGUNAKAN'}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-bold border-2 border-black"
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  background: 'var(--color-canvas)',
                                  color: 'var(--color-charcoal)',
                                  boxShadow: '2px 2px 0px #000',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Specs Box */}
                        <div
                          className="p-5 border-2 border-black"
                          style={{ background: '#0F172A', boxShadow: '6px 6px 0px #000', color: 'white' }}
                        >
                          <h3
                            className="text-xs font-black uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            <Layers size={13} />
                            {language === 'en' ? 'SPECIFICATIONS' : 'SPESIFIKASI'}
                          </h3>
                          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                            <div>
                              <span className="text-gray-400 uppercase text-[10px] block">CATEGORY</span>
                              <span className="font-bold text-white text-xs mt-0.5 block">{project.category}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 uppercase text-[10px] block">PLATFORM</span>
                              <span className="font-bold text-white text-xs mt-0.5 block">Full-Stack Web</span>
                            </div>
                            <div>
                              <span className="text-gray-400 uppercase text-[10px] block">STACK SIZE</span>
                              <span className="font-bold text-white text-xs mt-0.5 block">{project.techStack.length} {language === 'en' ? 'Technologies' : 'Teknologi'}</span>
                            </div>
                            <div>
                              <span className="text-gray-400 uppercase text-[10px] block">DEVELOPER</span>
                              <span className="font-bold text-white text-xs mt-0.5 block">Agiel Nawawi</span>
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
