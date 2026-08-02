import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Mail, GitFork, Link2, Check, Phone } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const getContactItems = (personal: any, language: 'en' | 'id') => [
  { id: 'contact-email', icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { id: 'contact-phone', icon: Phone, label: language === 'en' ? 'Phone' : 'Telepon', value: (personal as any).phone as string, href: `tel:${(personal as any).phone}` },
  { id: 'contact-location', icon: MapPin, label: language === 'en' ? 'Location' : 'Lokasi', value: personal.location, href: '#' },
  { id: 'contact-github', icon: GitFork, label: 'GitHub', value: 'agielnawawi46', href: personal.github },
  { id: 'contact-linkedin', icon: Link2, label: 'LinkedIn', value: 'agielnawawi46', href: personal.linkedin },
]

export default function ContactSection() {
  const { language } = useLanguage()
  const { personal } = portfolioData[language]
  const contactItems = getContactItems(personal, language)

  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-60px' })

  const springBase = { type: 'spring' as const, stiffness: 65, damping: 18 }

  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={ref}
      /* REVISI 1: Menyesuaikan padding & flex layout agar jarak elemen seimbang */
      className="relative w-full flex flex-col justify-center items-center py-20 md:py-28 px-6 overflow-hidden border-b-2 border-black"
      style={{ background: 'var(--color-lavender)' }}
      aria-label="Contact section"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full z-10 flex flex-col justify-center" style={{ marginBottom: '3.5rem' }}>

        {/* Header - REVISI 2: Menggunakan margin-bottom yang konsisten (mb-12 md:mb-16 lg:mb-20) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={inView ? { ...springBase } : {}}
          className="mb-12 md:mb-16 flex flex-col items-center text-center w-full"
          style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            {language === 'en' ? "LET'S WORK" : 'MARI BEKERJA'}<br />
            <span className="text-white" style={{ textShadow: '3px 3px 0px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
              {language === 'en' ? 'TOGETHER' : 'SAMA-SAMA'}
            </span>
          </h2>
          <div className="mt-3 h-1.5 w-16 bg-black" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">

          {/* Left — Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={inView ? { ...springBase, delay: 0.1 } : {}}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {/* Intro box */}
            <div className="border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_#000]" style={{ background: 'var(--color-canvas)' }}>
              <h3 className="text-xl font-black uppercase mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {language === 'en' ? 'GET IN TOUCH' : 'HUBUNGI SAYA'}
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)' }}>
                {language === 'en' ? 'Interested in collaborating or have an interesting project? Send a message and I will respond within 1-2 business days.' : 'Tertarik untuk berkolaborasi atau memiliki proyek menarik? Kirim pesan dan saya akan merespons dalam 1-2 hari kerja.'}
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-3">
              {contactItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: (idx % 2 === 0 ? -30 : 30) }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={inView ? { ...springBase, delay: 0.1 + idx * 0.1 } : {}}
                  className="flex items-center gap-5 border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-transform"
                  style={{ background: 'var(--color-canvas)', color: 'var(--color-charcoal)' }}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 bg-orange-500 border-2 border-black text-black">
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] md:text-xs font-bold tracking-widest uppercase opacity-60" style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-bold truncate" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={inView ? { ...springBase, delay: 0.18 } : {}}
            className="md:col-span-7 flex flex-col"
          >
            <div className="border-2 border-black p-8 md:p-12 shadow-[6px_6px_0px_#000] h-full flex flex-col" style={{ background: 'var(--color-canvas)' }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 h-full">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[0.7rem] font-bold tracking-widest uppercase opacity-70" style={{ fontFamily: 'var(--font-mono)' }}>
                      {language === 'en' ? 'Name' : 'Nama'}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full bg-white border-2 border-black p-4 md:p-5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                      style={{ fontFamily: 'var(--font-body)' }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.7rem] font-bold tracking-widest uppercase opacity-70" style={{ fontFamily: 'var(--font-mono)' }}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full bg-white border-2 border-black p-4 md:p-5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                      style={{ fontFamily: 'var(--font-body)' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <label htmlFor="message" className="text-[0.7rem] font-bold tracking-widest uppercase opacity-70" style={{ fontFamily: 'var(--font-mono)' }}>
                    {language === 'en' ? 'Message' : 'Pesan'}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full flex-1 bg-white border-2 border-black p-4 md:p-5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow resize-none"
                    style={{ fontFamily: 'var(--font-body)', minHeight: '120px' }}
                    placeholder={language === 'en' ? "Tell me about your project..." : "Ceritakan tentang proyek Anda..."}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="group relative w-full border-2 border-black py-4 md:py-5 px-5 flex items-center justify-center gap-2.5 transition-all disabled:opacity-80 mt-1"
                  style={{
                    background: isSuccess ? '#22C55E' : 'var(--color-orange)',
                    color: 'var(--color-charcoal)',
                    boxShadow: '4px 4px 0px #000',
                  }}
                  aria-live="polite"
                >
                  <span className="font-black text-sm md:text-base tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                    {isSubmitting ? (language === 'en' ? 'SENDING...' : 'MENGIRIM...') : isSuccess ? (language === 'en' ? 'SENT SUCCESSFULLY' : 'BERHASIL DIKIRIM') : (language === 'en' ? 'SEND MESSAGE' : 'KIRIM PESAN')}
                  </span>
                  {!isSubmitting && (
                    isSuccess ? <Check size={20} /> : <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}