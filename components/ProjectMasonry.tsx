'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const projects = [
  {
    title: 'Casa Terra',
    category: 'Vivienda',
    image: '/projects/proyecto-1.jpg',
  },
  {
    title: 'Refugio Norte',
    category: 'Arquitectura residencial',
    image: '/projects/proyecto-2.jpg',
  },
  {
    title: 'Interior Piedra',
    category: 'Interiorismo',
    image: '/projects/proyecto-3.jpg',
  },
  {
    title: 'Estudio Urbano',
    category: 'Comercial',
    image: '/projects/proyecto-4.jpg',
  },
]

export default function ProjectMasonry() {
  return (
    <section className="bg-[#050505] px-5 py-20 text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.35em]">
            Portafolio
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Proyectos destacados
          </h2>

          <p className="mt-4 text-base leading-7 text-[#D8C3A5] sm:text-lg">
            Una selección de proyectos arquitectónicos desarrollados con atención
            al detalle, materialidad y experiencia espacial.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-[#111111] shadow-2xl"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 overflow-hidden sm:h-80 md:h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#D99A00] sm:text-sm sm:tracking-[0.25em]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#D8C3A5]">
                  Proyecto desarrollado con enfoque en diseño, funcionalidad y
                  conexión con el entorno.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}