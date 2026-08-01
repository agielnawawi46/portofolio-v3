import HeroTerminal from './HeroTerminal'

export default function IdentitySection() {
  return (
    <section id="identity" className="relative w-full min-h-screen flex flex-col items-center justify-center border-b-2 border-black" style={{ background: "var(--color-orange)" }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto px-6 md:px-10 py-32 md:py-48 relative z-10 flex flex-col items-center w-full">
        <div className="mb-12 md:mb-16 text-center w-full">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
            MY IDENTITY
          </h2>
          <p className="text-sm md:text-base font-bold tracking-widest uppercase opacity-80" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
            Personal Details & Status
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center">
          <HeroTerminal />
        </div>
      </div>
    </section>
  )
}
