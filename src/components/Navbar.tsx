import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'HOME' },
  { href: '#identity', label: 'IDENTITY' },
  { href: '#about', label: 'ABOUT' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-[var(--color-canvas)]/95 backdrop-blur-sm border-b-2 border-[var(--color-border)]'
            : 'bg-[var(--color-canvas)] border-b-2 border-[var(--color-border)]'
          }`}
        style={{ boxShadow: scrolled ? '0 2px 0 var(--color-border)' : 'none' }}
      >
        {/*
          PERBAIKAN 1:
          Gunakan `w-full px-6 md:px-12` tanpa `max-w-7xl` agar lebar header konsisten 
          dengan batas tepi layar/section di bawahnya.
        */}
        <div className="w-full px-6 md:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo Kiri */}
            <a
              href="#hero"
              className="font-display font-800 text-lg tracking-tight flex items-center gap-2 shrink-0"
              style={{ fontFamily: 'var(--font-display)' }}
              aria-label="Go to top"
            >
              <span
                className="px-2 py-0.5 text-sm font-bold text-[var(--color-canvas)]"
                style={{
                  background: 'var(--color-charcoal)',
                  fontFamily: 'var(--font-mono)',
                  border: '2px solid var(--color-border)',
                }}
              >
                @AGIEL
              </span>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-orange)', fontFamily: 'var(--font-mono)' }}
              >
                .DEV
              </span>
            </a>

            {/* 
              PERBAIKAN 2: 
              Desktop Nav menggunakan `flex-1 justify-center` agar otomatis presisi di tengah
              antara logo kiri dan action button kanan.
            */}
            <nav
              className="hidden md:flex items-center justify-center flex-1 gap-8 px-4"
              aria-label="Main navigation"
            >
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 text-xs font-bold tracking-widest transition-colors whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: isActive ? 'var(--color-orange)' : 'var(--color-charcoal)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: 'var(--color-orange)' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 shrink-0">


              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-toggle"
                className="md:hidden w-9 h-9 flex items-center justify-center sticker-box"
                style={{
                  background: 'var(--color-canvas)',
                  border: '2px solid var(--color-border)',
                }}
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 border-b-2"
            style={{
              background: 'var(--color-canvas)',
              borderColor: 'var(--color-border)',
            }}
          >
            <nav className="flex flex-col py-2" aria-label="Mobile navigation">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-8 py-4 text-xs font-bold tracking-widest border-b flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      borderColor: 'var(--color-border)',
                      color: isActive ? 'var(--color-orange)' : 'var(--color-charcoal)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: 'var(--color-orange)' }}
                      />
                    )}
                    {link.label}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}