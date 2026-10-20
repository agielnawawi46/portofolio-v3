import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, X, Server } from 'lucide-react'

interface ComingSoonToastProps {
  visible: boolean
  onClose: () => void
  language: 'en' | 'id'
}

export default function ComingSoonToast({ visible, onClose, language }: ComingSoonToastProps) {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [visible, onClose])

  // Handle Escape key
  useEffect(() => {
    if (!visible) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [visible, onClose])

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Modal Card */}
          <motion.div
            role="alertdialog"
            aria-modal="true"
            aria-label={language === 'en' ? 'Project Status Notice' : 'Pemberitahuan Status Proyek'}
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md border-3 border-orange-500 overflow-hidden"
            style={{
              background: '#0F172A',
              boxShadow: '8px 8px 0px var(--color-orange)',
            }}
          >
            {/* Window Top Bar */}
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b-2 border-orange-500/40"
              style={{ background: '#1E293B' }}
            >
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-500 border border-black inline-block" />
                <span className="size-2.5 rounded-full bg-yellow-500 border border-black inline-block" />
                <span className="size-2.5 rounded-full bg-green-500 border border-black inline-block" />
                <span
                  className="ml-2 text-[11px] font-bold tracking-widest text-slate-300 uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  DEPLOY_STATUS // READY
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="size-6 shrink-0 flex items-center justify-center font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer bg-transparent border-0 p-0"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 flex flex-col items-center text-center">
              {/* Rocket Badge Icon */}
              <div
                className="size-16 mb-4 flex items-center justify-center border-2 border-orange-500 bg-orange-500/10 shadow-[4px_4px_0px_var(--color-orange)]"
              >
                <Rocket size={32} color="var(--color-orange)" />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-black uppercase tracking-wider text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {language === 'en' ? 'PROJECT FULLY BUILT!' : 'PROYEK SUDAH SELESAI!'}
              </h3>

              {/* Status Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold uppercase tracking-widest border border-orange-500/40 bg-orange-500/10 text-orange-400 mb-3.5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <Server size={12} />
                {language === 'en' ? 'STATUS: PENDING DEPLOYMENT' : 'STATUS: BELUM TERDEPLOY'}
              </div>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mb-5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {language === 'en'
                  ? 'This application has been fully developed and runs locally, but is not hosted on a public server yet. You can review the complete source code on GitHub!'
                  : 'Proyek ini sudah selesai dikembangkan dan berfungsi penuh, namun belum di-hosting/di-deploy secara publik. Anda dapat meninjau kode sumber lengkapnya di GitHub!'}
              </p>

              {/* Confirm / Close Button */}
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 text-xs font-black uppercase tracking-wider border-2 border-orange-500 bg-orange-500 text-black hover:bg-orange-400 transition-colors shadow-[3px_3px_0px_#000] cursor-pointer"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {language === 'en' ? 'OK, UNDERSTOOD' : 'OKE, SAYA MENGERTI'}
              </button>
            </div>

            {/* Auto-Dismiss Progress Bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: 'linear' }}
              className="absolute bottom-0 inset-x-0 h-[4px] bg-orange-500 origin-left"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
