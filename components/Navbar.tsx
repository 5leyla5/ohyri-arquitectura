'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-16 lg:px-20">
        <Link href="/" className="group">
          <div className="text-lg font-semibold tracking-[0.22em] text-[#D99A00] sm:text-xl sm:tracking-[0.25em]">
           OHY’RI
          </div>
          <div className="text-xs tracking-[0.45em] text-[#D8C3A5]">
            arquitectura
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  active
                    ? 'text-[#D99A00]'
                    : 'text-[#F5EFE6]/80 hover:text-[#D99A00]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <Link
          href="/contacto"
          className="hidden rounded-full border border-[#D99A00]/60 px-5 py-2 text-sm font-medium text-[#D99A00] transition hover:bg-[#D99A00] hover:text-black md:block"
        >
          Cotizar
        </Link>

        <button
          className="text-2xl text-[#F5EFE6] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          className="border-t border-white/10 bg-[#050505] px-6 py-6 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#F5EFE6] transition hover:text-[#D99A00]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}