import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Kunci scroll saat splash screen aktif
    document.body.style.overflow = 'hidden';
    
    // Set timer untuk menyelesaikan splash screen
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // 2.8 detik agar teks yang lebih panjang sempat terbaca

    return () => {
      // Kembalikan scroll saat komponen dilepas
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'var(--color-charcoal)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="flex flex-col items-center justify-center text-center gap-3 md:gap-4"
        style={{ color: 'var(--color-canvas)' }}
      >
        <span className="text-sm md:text-lg tracking-[0.2em] font-bold opacity-90 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
          Agiel Nawawi
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          WELCOME TO MY<br />PORTFOLIO
        </h1>
        <span className="text-xs md:text-sm tracking-[0.3em] font-bold opacity-70" style={{ fontFamily: 'var(--font-mono)' }}>
          WEB DEVELOPMENT
        </span>
      </motion.div>
    </motion.div>
  );
}
