import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, X } from 'lucide-react'

interface ComingSoonToastProps {
  visible: boolean
  onClose: () => void
  language: 'en' | 'id'
}

export default function ComingSoonToast({ visible, onClose, language }: ComingSoonToastProps) {
  // Auto-dismiss after 3.5 seconds
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [visible, onClose])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 20px',
            background: '#0F172A',
            border: '2px solid var(--color-orange)',
            boxShadow: '6px 6px 0px var(--color-orange)',
            minWidth: '280px',
            maxWidth: '90vw',
          }}
        >
          {/* Icon */}
          <div style={{ flexShrink: 0 }}>
            <Rocket size={24} color="var(--color-orange)" />
          </div>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '900',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-orange)',
              marginBottom: '2px',
            }}>
              {language === 'en' ? 'Coming Soon!' : 'Segera Hadir!'}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(226,232,240,0.7)',
              lineHeight: 1.4,
            }}>
              {language === 'en'
                ? 'This project is not deployed yet. Stay tuned!'
                : 'Project ini belum terdeploy. Pantau terus!'}
            </p>
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

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(226,232,240,0.4)',
              padding: '2px',
              flexShrink: 0,
            }}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
