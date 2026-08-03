import { useState, useEffect } from 'react'
import { GitFork, Link2, Mail, ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
export default function Footer() {
  const { language } = useLanguage()
  const { personal } = portfolioData[language]
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer
      className="border-t-2 border-black w-full"
      style={{ background: '#0F172A', color: 'white' }}
      aria-label="Footer"
    >
      {/* Main */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 justify-between items-start">

          {/* Brand - Rata Tengah di Mobile, Kiri di Desktop */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="px-2.5 py-1 text-sm font-bold"
                style={{ background: 'var(--color-canvas)', color: 'var(--color-charcoal)', fontFamily: 'var(--font-mono)', border: '2px solid rgba(226,232,240,0.2)' }}
              >
                @AGIEL
              </span>
              <span className="text-sm font-bold tracking-widest" style={{ color: 'var(--color-orange)', fontFamily: 'var(--font-mono)' }}>
                .DEV
              </span>
            </div>
            <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ fontFamily: 'var(--font-body)' }}>
              {language === 'en' ? 'Informatics Engineering student focusing on Web Development and Software Engineering.' : 'Mahasiswa Teknik Informatika yang berfokus pada Web Development dan Software Engineering.'}
            </p>
            <div className="text-4xl md:text-5xl font-black uppercase leading-none select-none" style={{ fontFamily: 'var(--font-display)', opacity: 0.05 }} aria-hidden>
              AGIEL<br />NAWAWI
            </div>
          </div>


          {/* Social - Rata Tengah di Mobile, Kanan di Desktop */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
              {language === 'en' ? 'CONNECT' : 'HUBUNGI'}
            </h3>
            <div className="flex justify-center md:justify-end gap-3 mb-8">
              {[
                { icon: GitFork, href: personal.github, id: 'footer-github', label: 'GitHub' },
                { icon: Link2, href: personal.linkedin, id: 'footer-linkedin', label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, id: 'footer-email', label: 'Email' },
              ].map(({ icon: Icon, href, id, label }) => (
                <a
                  key={id} id={id} href={href}
                  target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{ border: '2px solid rgba(226,232,240,0.15)', color: 'var(--color-canvas)' }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-mono)' }}>{personal.email}</p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>{personal.location}</p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-slate-800 w-full">
        <div className="w-full px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-center md:text-left" style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Agiel Nawawi — {language === 'en' ? 'Built with React + ❤️' : 'Dibuat dengan React + ❤️'}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs md:text-sm" style={{ fontFamily: 'var(--font-mono)' }}>{personal.dateStamp}</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            id="floating-scroll-to-top"
            onClick={scrollTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-transform sticker-box"
            style={{ 
              border: '2px solid black', 
              color: 'var(--color-charcoal)', 
              background: 'var(--color-orange)', 
              cursor: 'pointer',
              boxShadow: '4px 4px 0px #000'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  )
}