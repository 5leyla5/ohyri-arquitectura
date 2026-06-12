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
  {
    name: 'Sustentabilidad',
    href: 'https://www.arqsostenible.cl/',
    external: true,
  },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#D9A300] bg-[#000000] text-[#F5F5F5] shadow-2xl">
      <div className="mx-auto flex h-36 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-40 lg:px-10 xl:px-0">
        {/* Logo lado izquierdo */}
        <Link href="/" className="flex items-center gap-1">
          <img
            src="/gifs/terra.gif"
            alt="Ícono planta HOY’RI"
            className="h-14 w-14 shrink-0 rounded-full border border-[#D9A300]/60 bg-[#F5F5F5] object-contain p-1 shadow-[0_0_18px_rgba(217,163,0,0.25)] md:h-16 md:w-16"
          />

          <img
            src="/logos/logo-hoyri-arq.jpg"
            alt="Logo HOY’RI Arquitectura"
            className="h-auto max-h-28 w-auto max-w-[340px] object-contain md:max-h-32 md:max-w-[430px]"
          />
        </Link>

        {/* Separador dorado */}
        <div className="mx-[clamp(0.75rem,2vw,2rem)] hidden h-20 w-px shrink-0 bg-[#D9A300]/70 lg:block" />

        {/* Navegación escritorio */}
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-[clamp(0.45rem,1.2vw,2rem)] lg:flex">
          {links.map((link) => {
            const active = pathname === link.href

            const className = `font-body whitespace-nowrap uppercase transition [font-size:clamp(9px,0.72vw,13px)] [letter-spacing:clamp(0.04em,0.12vw,1em)] ${
              active
                ? 'text-[#D9A300]'
                : 'text-[#F5F5F5] hover:text-[#D9A300]'
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
        </nav>

        {/* Botón menú móvil/tablet */}
        <button
          className="ml-4 text-4xl text-[#D9A300] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          className="border-t border-[#D9A300]/50 bg-[#000000] px-8 py-7 lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => {
              const active = pathname === link.href

              const className = `font-body text-base uppercase tracking-[0.18em] transition ${
                active
                  ? 'text-[#D9A300]'
                  : 'text-[#F5F5F5] hover:text-[#D9A300]'
              }`

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={className}
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
                  className={className}
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