import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, GitFork, Link2, Check, MessageCircle } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

const getContactItems = (personal: any, language: 'en' | 'id') => [
  { id: 'contact-email', icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { id: 'contact-wa', icon: MessageCircle, label: 'WhatsApp', value: (personal as any).phone as string, href: `https://wa.me/${(personal as any).phone.replace(/\D/g, '')}` },
  { id: 'contact-location', icon: MapPin, label: language === 'en' ? 'Location' : 'Lokasi', value: personal.location, href: '#' },
  { id: 'contact-github', icon: GitFork, label: 'GitHub', value: 'agielnawawi46', href: personal.github },
  { id: 'contact-linkedin', icon: Link2, label: 'LinkedIn', value: 'agielnawawi46', href: personal.linkedin },
]

export default function ContactSection() {
  const { language } = useLanguage()
  const { personal } = portfolioData[language]
  const contactItems = getContactItems(personal, language)

  const springBase = { type: 'spring' as const, stiffness: 60, damping: 18 }
  const vp = { once: false, amount: 0.1 }

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
      /* REVISI 1: Menyesuaikan padding & flex layout agar jarak elemen seimbang */
      className="relative w-full flex flex-col justify-center items-center py-20 md:py-28 px-6 sm:px-10 md:px-12 overflow-hidden border-b-2 border-black"
      style={{ background: 'var(--color-lavender)' }}
      aria-label="Contact section"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full z-10 flex flex-col justify-center" style={{ marginBottom: '3.5rem' }}>

        {/* Header - REVISI 2: Menggunakan margin-bottom yang konsisten (mb-12 md:mb-16 lg:mb-20) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ ...springBase }}
          className="mb-12 md:mb-16 flex flex-col items-center text-center w-full"
          style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal)' }}
          >
            {language === 'en' ? "LET'S WORK" : 'MARI BEKERJA'}<br />
            <span style={{ color: 'white', textShadow: '4px 4px 0px #000' }}>
              {language === 'en' ? 'TOGETHER' : 'SAMA-SAMA'}
            </span>
          </h2>
          <div className="mt-3 h-1.5 w-16 bg-black" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">

          {/* Left — Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ ...springBase, delay: 0.1 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {/* Intro box */}
            <div className="border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_#000] relative" style={{ background: 'var(--color-canvas)' }}>
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center font-black text-sm bg-orange-500 border-2 border-black">
                ×
              </div>
              
              <h3 className="text-xl md:text-2xl font-black uppercase mb-1 shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
                {language === 'en' ? 'GET IN TOUCH' : 'HUBUNGI SAYA'}
              </h3>
              <div className="w-10 h-1 bg-black mb-4 shrink-0" />
              
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
                  initial={{ opacity: 0, x: (idx % 2 === 0 ? -40 : 40) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ ...springBase, delay: 0.1 + idx * 0.1 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ ...springBase, delay: 0.18 }}
            className="md:col-span-7 flex flex-col"
          >
            <div className="border-2 border-black h-full flex flex-col overflow-hidden" style={{ background: '#0F172A', boxShadow: '8px 8px 0px #000' }}>
              {/* Terminal Title Bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b-2 shrink-0 border-black"
                style={{ background: '#1E293B' }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} />
                <span className="ml-2 text-xs opacity-60" style={{ fontFamily: 'var(--font-mono)', color: 'white' }}>
                  ~/contact
                </span>
                <span className="ml-auto text-[10px] opacity-40" style={{ fontFamily: 'var(--font-mono)', color: '#7DD3FC' }}>
                  send_message.sh
                </span>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 h-full">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[0.75rem] font-bold tracking-widest flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', color: '#F472B6' }}>
                        <span style={{ color: '#94A3B8' }}>const</span> name <span style={{ color: '#94A3B8' }}>=</span>
                      </label>
                      <div className="flex items-center pb-1 transition-colors">
                        <span className="text-[#7DD3FC] mr-1" style={{ fontFamily: 'var(--font-mono)' }}>"</span>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                          className="w-full bg-transparent text-sm md:text-base focus:outline-none"
                          style={{ fontFamily: 'var(--font-mono)', color: '#22C55E' }}
                          placeholder="John Doe"
                        />
                        <span className="text-[#7DD3FC] ml-1" style={{ fontFamily: 'var(--font-mono)' }}>"</span>
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[0.75rem] font-bold tracking-widest flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', color: '#F472B6' }}>
                        <span style={{ color: '#94A3B8' }}>const</span> email <span style={{ color: '#94A3B8' }}>=</span>
                      </label>
                      <div className="flex items-center pb-1 transition-colors">
                        <span className="text-[#7DD3FC] mr-1" style={{ fontFamily: 'var(--font-mono)' }}>"</span>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                          className="w-full bg-transparent text-sm md:text-base focus:outline-none"
                          style={{ fontFamily: 'var(--font-mono)', color: '#22C55E' }}
                          placeholder="john@example.com"
                        />
                        <span className="text-[#7DD3FC] ml-1" style={{ fontFamily: 'var(--font-mono)' }}>"</span>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2 flex-1 mt-2">
                    <label htmlFor="message" className="text-[0.75rem] font-bold tracking-widest flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', color: '#FBBF24' }}>
                      <span style={{ color: '#94A3B8' }}>const</span> message <span style={{ color: '#94A3B8' }}>=</span> <span className="text-[#7DD3FC]">`</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      className="w-full flex-1 bg-transparent p-3 mt-1 text-sm md:text-base focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-mono)', color: '#22C55E', minHeight: '120px' }}
                      placeholder={language === 'en' ? "Tell me about your project..." : "Ceritakan tentang proyek Anda..."}
                    />
                    <div className="text-[#7DD3FC] font-bold text-[1rem]" style={{ fontFamily: 'var(--font-mono)' }}>`</div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="group relative w-full border-2 border-black py-4 md:py-5 px-5 flex items-center justify-center gap-2.5 transition-all disabled:opacity-80 mt-4 hover:cursor-pointer"
                    style={{
                      background: isSuccess ? '#22C55E' : 'var(--color-orange)',
                      color: 'var(--color-charcoal)',
                    }}
                    aria-live="polite"
                  >
                    <span className="font-bold text-sm md:text-base tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                      <span className="opacity-50 mr-2">~/</span>
                      {isSubmitting ? (language === 'en' ? 'EXECUTING...' : 'MENGEKSEKUSI...') : isSuccess ? (language === 'en' ? 'EXECUTION SUCCESS' : 'EKSEKUSI BERHASIL') : (language === 'en' ? './SEND.SH' : './KIRIM.SH')}
                    </span>
                    {!isSubmitting && (
                      isSuccess ? <Check size={18} /> : <span className="font-bold opacity-50 group-hover:translate-x-1 transition-transform">_</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}