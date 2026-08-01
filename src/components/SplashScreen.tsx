import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Kunci scroll saat splash screen aktif
    document.body.style.overflow = 'hidden';
    
    // Set timer untuk menyelesaikan splash screen
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 detik

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
        className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight text-center leading-[0.95]"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-canvas)' }}
      >
        AGIEL<br />NAWAWI
      </motion.div>
    </motion.div>
  );
}
