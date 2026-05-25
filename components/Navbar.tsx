'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes Somos', href: '/quienes-somos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Sustentabilidad', href: 'https://www.arqsostenible.cl/', external: true },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/95 text-[#F5EFE6] backdrop-blur-xl">
      {/* Parte superior del navbar */}
        <div className="relative mx-auto flex h-44 max-w-7xl items-center justify-center px-5 sm:h-48 md:h-52 md:px-20">
          {/* Logo centrado */}
        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6"
        >
          {/* GIF/planta al lado izquierdo */}
          <img
            src="/gifs/terra.gif"
            alt="Planta OHY’RI"
            className="h-16 w-16 rounded-full bg-[#F5EFE6] object-contain p-2 sm:h-30 sm:w-30"
          />

          {/* Texto logo */}
          <div className="text-center">
            <div className="text-3xl font-semibold tracking-[0.45em] text-[#D99A00] sm:text-4xl">
              HOY’RI
            </div>

            <div className="mt-2 text-sm tracking-[0.65em] text-[#D8C3A5] sm:text-base">
              arquitectura
            </div>
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button
          className="absolute right-5 text-3xl text-[#F5EFE6] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Franja inferior con links en escritorio */}
      <nav className="hidden border-t border-white/10 bg-[#6B3F1D]/80 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-12 px-16">
          {links.map((link) => {
            const active = pathname === link.href
            const className = `text-xs uppercase tracking-[0.28em] transition ${
              active
                ? 'text-[#F5EFE6]'
                : 'text-[#D8C3A5] hover:text-[#D99A00]'
            }`
          
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.name}
                </a>
              )
            }
          
            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <motion.div
          className="border-t border-white/10 bg-[#050505] px-8 py-6 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-[#F5EFE6] transition hover:text-[#D99A00]"
                  >
                    {link.name}
                  </a>
                )
              }
            
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-[#F5EFE6] transition hover:text-[#D99A00]"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </header>
  )
}