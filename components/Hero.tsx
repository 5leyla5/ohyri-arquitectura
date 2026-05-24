'use client'

import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pb-20 pt-32 text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#A85F2A,transparent_35%),linear-gradient(135deg,#050505,#2B2D30)]" />

      <div className="absolute right-[-180px] top-[-140px] h-[320px] w-[320px] rounded-full border border-[#D99A00]/20 sm:right-[-120px] sm:h-[380px] sm:w-[380px]" />
      <div className="absolute bottom-[-180px] left-[-180px] h-[360px] w-[360px] rounded-full border border-[#A85F2A]/30 sm:h-[440px] sm:w-[440px]" />

      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.45em]">
          OHY’RI Arquitectura
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Arquitectura con identidad, materia y propósito.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[#D8C3A5] sm:text-lg sm:leading-8">
          Diseñamos espacios que integran funcionalidad, estética y una lectura
          profunda del entorno, transformando ideas en proyectos habitables.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href="/proyectos"
            className="w-full rounded-full bg-[#D99A00] px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#F5EFE6] sm:w-auto"
          >
            Ver proyectos
          </a>

          <a
            href="/contacto"
            className="w-full rounded-full border border-[#D8C3A5]/40 px-7 py-3 text-center text-sm font-semibold text-[#F5EFE6] transition hover:border-[#D99A00] hover:text-[#D99A00] sm:w-auto"
          >
            Cotizar proyecto
          </a>
        </div>
      </motion.div>
    </section>
  )
}