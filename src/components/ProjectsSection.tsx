import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitFork } from 'lucide-react'
import { portfolioData, type Project } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

const { projects } = portfolioData

const categoryColors: Record<string, string> = {
  'Web App': 'var(--color-lavender)',
  'E-Commerce': 'var(--color-orange)',
  'Dashboard': 'var(--color-charcoal)',
  'Blog': 'var(--color-lavender)',
  'CLI Tool': 'var(--color-orange)',
  'UI Library': 'var(--color-lavender)',
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const springBase = { type: 'spring' as const, stiffness: 65, damping: 18 }
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden py-20 md:py-28 border-b-2 border-black"
        style={{
          background: 'var(--color-charcoal)',
          color: 'var(--color-canvas)',
        }}
        aria-label="Projects section"
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(226,232,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full z-10 flex flex-col justify-center">

          {/* Header - REVISI: Mengurangi mb-20 menjadi mb-8 md:mb-10 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={inView ? { ...springBase } : {}}
            className="mb-8 md:mb-10 flex flex-col items-center text-center"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
            >
              WHAT I'VE <span style={{ color: 'var(--color-orange)' }}>BUILT</span>
            </h2>
          </motion.div>

          {/* Grid Proyek - REVISI: Memperbesar gap menjadi gap-8 md:gap-10 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-6 md:mt-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40, x: (i % 2 === 0 ? -20 : 20) }}
                animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={inView ? { ...springBase, delay: i * 0.1 } : {}}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedProject(project)}
                role="button"
                aria-label={`Open ${project.title} details`}
              >
                <div
                  className="h-full overflow-hidden flex flex-col border-2 border-black bg-white/5"
                  style={{
                    boxShadow: '8px 8px 0px #000',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                >
                  {/* Card header */}
                  <div
                    className="relative h-44 md:h-52 flex items-center justify-center overflow-hidden flex-shrink-0"
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
                    <span className="text-6xl font-black opacity-15 select-none relative" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="px-3.5 py-2 text-[0.7rem] font-bold tracking-wider" style={{ background: 'var(--color-charcoal)', color: 'white', fontFamily: 'var(--font-display)', border: '2px solid rgba(255,255,255,0.7)' }}>
                        VIEW DETAILS
                      </span>
                    </div>
                  </div>

                  {/* Card body - REVISI: Padding & spacing diatur ulang (p-6 md:p-7) */}
                  <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h3
                        className="text-lg md:text-xl font-black uppercase mb-3 leading-tight group-hover:text-orange-400 transition-colors"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs md:text-sm leading-relaxed opacity-70 line-clamp-3"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-canvas)' }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="tech-tag text-xs px-2.5 py-1">{tech}</span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="tech-tag text-xs px-2.5 py-1" style={{ opacity: 0.4 }}>+{project.techStack.length - 3}</span>
                        )}
                      </div>

                      {/* Links */}
                      <div
                        className="flex gap-4 pt-3"
                        style={{ borderTop: '1px solid rgba(226,232,240,0.12)' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold opacity-60 hover:opacity-100 transition-opacity"
                          style={{ color: 'var(--color-canvas)', fontFamily: 'var(--font-mono)' }}
                          id={`project-github-${project.id}`} aria-label={`GitHub: ${project.title}`}
                        >
                          <GitFork size={12} /> CODE
                        </a>
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold opacity-80 hover:opacity-100 transition-opacity"
                          style={{ color: 'var(--color-orange)', fontFamily: 'var(--font-mono)' }}
                          id={`project-demo-${project.id}`} aria-label={`Demo: ${project.title}`}
                        >
                          <ExternalLink size={12} /> DEMO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}