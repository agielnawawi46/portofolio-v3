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
            className="w-40 md:w-48 lg:w-56 xl:w-64 border-2 border-black overflow-hidden"
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
          <div className="code-terminal p-5 md:p-6 lg:p-8 xl:p-10">
            <div className="flex flex-col gap-1.5 md:gap-2">
              {codeLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className={`font-mono text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg whitespace-pre ct-${line.type}`}
                >
                  {line.content || "\u00A0"}
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="inline-block w-1.5 h-3 md:h-4 lg:h-5 align-middle mt-1"
                style={{ background: "#7DD3FC" }}
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-2 gap-4 md:gap-5"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.8 }}
          className="border-2 border-black flex flex-col justify-center px-4 py-4 md:py-6 lg:py-8"
          style={{ background: "var(--color-orange)", boxShadow: "6px 6px 0px #000" }}
        >
          <span className="text-xs lg:text-sm xl:text-base font-bold uppercase mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
            Projects
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
            4+
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSmooth, delay: 0.9 }}
          className="border-2 border-black flex flex-col justify-center px-4 py-4 md:py-6 lg:py-8"
          style={{ background: "var(--color-lavender)", boxShadow: "6px 6px 0px #000" }}
        >
          <span className="text-xs lg:text-sm xl:text-base font-bold uppercase mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--color-charcoal)" }}>
            Semester
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
            4
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
