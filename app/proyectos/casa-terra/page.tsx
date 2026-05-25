'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const casaTerraGallery = [
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-1.jpg',
    alt: 'Vista principal Casa Terra',
    height: 'h-80 md:h-[480px]',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Video Casa Terra',
    height: 'h-80 md:h-[420px]',
  },
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-2.jpg',
    alt: 'Interior Casa Terra',
    height: 'h-64 md:h-[360px]',
  },
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-3.jpg',
    alt: 'Detalle arquitectónico Casa Terra',
    height: 'h-96 md:h-[560px]',
  },
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-4.jpg',
    alt: 'Materialidad Casa Terra',
    height: 'h-72 md:h-[420px]',
  },
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-5.jpg',
    alt: 'Espacio exterior Casa Terra',
    height: 'h-80 md:h-[500px]',
  },
  {
    type: 'image',
    src: '/projects/casa-terra/casa-terra-6.jpg',
    alt: 'Ambiente Casa Terra',
    height: 'h-64 md:h-[380px]',
  },
]

export default function CasaTerraPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-24 pt-[17rem] text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/proyectos"
          className="text-sm uppercase tracking-[0.25em] text-[#D99A00] transition hover:text-[#F5EFE6]"
        >
          ← Volver a proyectos
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D99A00]">
              Vivienda
            </p>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Casa Terra
            </h1>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#D8C3A5] sm:text-lg">
            Proyecto residencial desarrollado desde la relación entre materia,
            luz, contexto y experiencia espacial. Una propuesta pensada para
            habitar con identidad y conexión con el entorno.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {casaTerraGallery.map((item, index) => (
            <motion.div
              key={item.src}
              className={`relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-white/5 bg-[#111111] shadow-2xl ${item.height}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? 'Imagen Casa Terra'}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <iframe
                  src={item.src}
                  title={item.title ?? 'Video Casa Terra'}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}