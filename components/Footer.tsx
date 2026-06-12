import Link from 'next/link'

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Quienes Somos', href: '/quienes-somos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#000000] px-5 pb-8 pt-14 text-[#F5F5F5] sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Logo + descripción */}
        <div className="max-w-sm">
          <img
            src="/logos/logo-hoyri-arq.jpg"
            alt="Logo HOY’RI Arquitectura"
            className="h-auto max-h-40 w-auto max-w-[260px] object-contain"
          />

          <p className="font-body mt-8 text-base leading-8 text-[#D8D8D8]">
            Estudio de arquitectura enfocado en crear espacios con identidad,
            funcionalidad y una relación sensible con el entorno.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="font-body mb-5 text-sm uppercase tracking-[0.28em] text-[#D9A300]">
            Navegación
          </h3>

          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-base text-[#F5F5F5] transition hover:text-[#D9A300]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-body mb-5 text-sm uppercase tracking-[0.28em] text-[#D9A300]">
            Contacto
          </h3>

          <div className="font-body space-y-4 text-base text-[#D8D8D8]">
            <p>Coquimbo / Chile</p>
            <p>contacto@hoyri-arquitectura.cl</p>
            <p>Instagram · WhatsApp · Correo</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#2A2A2A] pt-6">
        <p className="font-body text-sm text-[#D8D8D8]">
          © 2026 HOY’RI Arquitectura. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}