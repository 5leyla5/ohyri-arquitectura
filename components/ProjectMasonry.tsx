'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

type Project = {
  title: string
  category: string
  image: string
  images?: string[]
  slug?: string
}

const projects: Project[] = [
  {
    title: 'Casa Terra',
    category: 'Vivienda',
    image: '/projects/proyecto-1.jpg',
    slug: 'casa-terra',
  },
  {
    title: 'Interior Piedra',
    category: 'Interiorismo',
    image: '/projects/interior-piedra/interior-piedra-1.jpg',
    images: [
      '/projects/interior-piedra/interior-piedra-1.jpg',
      '/projects/interior-piedra/interior-piedra-2.jpg',
      '/projects/interior-piedra/interior-piedra-3.jpg',
    ],
  },
  {
    title: 'Refugio Norte',
    category: 'Arquitectura residencial',
    image: '/projects/proyecto-3.jpg',
  },
  {
    title: 'Estudio Urbano',
    category: 'Comercial',
    image: '/projects/proyecto-4.jpg',
  },
]

function ProjectImageSlider({ project }: { project: Project }) {
  const images = project.images ?? [project.image]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-72 overflow-hidden sm:h-80 md:h-[420px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${project.title} imagen ${index + 1}`}
          fill
          className={`object-cover transition-all duration-1000 group-hover:scale-105 ${
            index === activeIndex
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition ${
                index === activeIndex
                  ? 'bg-[#D99A00]'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

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
          {projects.map((project, index) => {
            const card = (
              <motion.article
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#0A0A0A] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#D9A300]/70 hover:shadow-[0_0_35px_rgba(217,163,0,0.30)]"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Brillo sobre toda la carta */}
                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D99A00,transparent_35%)] opacity-20" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,154,0,0.18),transparent_45%,rgba(168,95,42,0.18))]" />
                </div>

                <ProjectImageSlider project={project} />

                <div className="relative z-20 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#D9A300] sm:text-sm sm:tracking-[0.25em]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#F5F5F5] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#D8D8D8]">
                    Proyecto desarrollado con enfoque en diseño, funcionalidad y
                    conexión con el entorno.
                  </p>

                  {project.slug && (
                    <p className="mt-5 text-sm font-semibold text-[#D9A300]">
                      Ver galería →
                    </p>
                    )
                  }
                </div>
              </motion.article>
            )

            if (project.slug) {
              return (
                <Link
                  key={project.title}
                  href={`/proyectos/${project.slug}`}
                  className="block cursor-pointer"
                >
                  {card}
                </Link>
              )
            }

            return <div key={project.title}>{card}</div>
          })}
        </div>
      </div>
    </section>
  )
}