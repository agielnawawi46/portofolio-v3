import { motion } from 'framer-motion'

const codeLines = [
  { content: "// agiel.dev — Portfolio v3.0", type: "comment" },
  { content: "const developer = {", type: "default" },
  { content: "  name: \"Agiel Nawawi\",", type: "green" },
  { content: "  stack: [\"React\", \"TS\", \"Node\"],", type: "yellow" },
  { content: "  design: \"Collage Brutalism\",", type: "purple" },
  { content: "  available: true,", type: "orange" },
  { content: "};", type: "default" },
  { content: "", type: "default" },
  { content: "export default developer;", type: "green" },
]

const springSmooth = { type: "spring" as const, stiffness: 60, damping: 18 }
const springFast = { type: "spring" as const, stiffness: 100, damping: 22 }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...springSmooth, delay: i * 0.08 },
  }),
}

export default function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...springSmooth, delay: 0.12 }}
      className="flex flex-col gap-5 w-full mt-8 lg:mt-0"
    >
      {/* Terminal + Foto overlay */}
      <div className="relative">
        {/* Foto — Posisi disesuaikan per ukuran layar agar tidak terlalu meluap di mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springSmooth, delay: 0.6 }}
          className="absolute -right-2 -bottom-6 sm:-right-6 sm:-bottom-8 lg:-right-10 lg:-bottom-10 z-10"
        >
          <div
            className="w-40 border-2 border-black overflow-hidden"
            style={{ boxShadow: '8px 8px 0px #000', aspectRatio: '1/1.5' }}
          >
            <img
              src="/foto.jpg"
              alt="Agiel Nawawi"
              className="w-full h-full object-cover object-top"
              style={{ background: 'var(--color-lavender)' }}
            />
          </div>
        </motion.div>
        <div
          className="border-2 border-black overflow-hidden w-full"
          style={{ background: "#0F172A", boxShadow: "10px 10px 0px #000" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b-2"
            style={{ background: "#1E293B", borderColor: "var(--color-charcoal)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F59E0B" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
            <span className="ml-2 text-xs opacity-60" style={{ fontFamily: "var(--font-mono)", color: "white" }}>
              ~/agiel.dev
            </span>
          </div>
          <div className="code-terminal text-xs md:text-sm leading-relaxed p-4 md:p-5">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...springFast, delay: 0.4 + i * 0.07 }}
                className={`ct-${line.type}`}
              >
                {line.content || "\u00A0"}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="inline-block w-1.5 h-3 align-middle mt-1"
              style={{ background: "#7DD3FC" }}
            />
          </div>
        </div>
      </div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-2 gap-4 md:gap-5"
      >
        {[
          { label: "PROJECTS", value: "4+" },
          { label: "SEMESTER", value: "4" },
        ].map(stat => (
          <div
            key={stat.label}
            className="sticker-box p-4 md:p-6 bg-white/10 w-full"
            style={{ borderColor: "var(--color-charcoal)", boxShadow: "8px 8px 0px #000" }}
          >
            <div className="text-3xl md:text-4xl font-black leading-none mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              {stat.value}
            </div>
            <div className="text-xs font-bold tracking-wider opacity-80" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
