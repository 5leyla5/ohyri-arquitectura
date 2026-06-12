'use client'

import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#000000] px-5 pb-20 pt-72 text-[#F5F5F5] sm:px-8 md:px-16 lg:px-20">
      {/* Fondo visual */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,163,0,0.18),transparent_35%),linear-gradient(135deg,#000000,#0A0A0A,#111111)]" />

      {/* Líneas decorativas */}
      <div className="absolute right-[-180px] top-[-140px] h-[320px] w-[320px] rounded-full border border-[#D9A300]/20 sm:right-[-120px] sm:h-[380px] sm:w-[380px]" />

      <div className="absolute bottom-[-180px] left-[-180px] h-[360px] w-[360px] rounded-full border border-[#D9A300]/20 sm:h-[440px] sm:w-[440px]" />

      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h1 className="font-body max-w-4xl text-3xl font-semibold leading-[1.15] text-[#F5F5F5] sm:text-4xl md:text-5xl lg:text-6xl">
          Arquitectura con identidad, materia y propósito.
        </h1>

        <p className="font-body mt-6 max-w-2xl text-base leading-7 text-[#D8D8D8] sm:text-lg sm:leading-8">
          Diseñamos espacios que integran funcionalidad, estética y una lectura
          profunda del entorno, transformando ideas en proyectos habitables.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href="/proyectos"
            className="font-body w-full rounded-full bg-[#D9A300] px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#F5F5F5] sm:w-auto"
          >
            Ver proyectos
          </a>

          <a
            href="/contacto"
            className="font-body w-full rounded-full border border-[#F5F5F5]/30 px-7 py-3 text-center text-sm font-semibold text-[#F5F5F5] transition hover:border-[#D9A300] hover:text-[#D9A300] sm:w-auto"
          >
            Cotizar proyecto
          </a>
        </div>
      </motion.div>
    </section>
  )
}