import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-12 text-[#F5EFE6] md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-[0.25em] text-[#D99A00]">
            HOY’RI
          </h2>
          <p className="mt-2 text-sm tracking-[0.35em] text-[#D8C3A5]">
            arquitectura
          </p>

          <p className="mt-6 max-w-sm text-sm leading-6 text-[#D8C3A5]">
            Estudio de arquitectura enfocado en crear espacios con identidad,
            funcionalidad y una relación sensible con el entorno.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D99A00]">
            Navegación
          </h3>

          <div className="flex flex-col gap-3 text-sm text-[#F5EFE6]/80">
            <Link href="/" className="hover:text-[#D99A00]">
              Inicio
            </Link>
            <Link href="/quienes_somos" className="hover:text-[#D99A00]">
              Quienes Somos
            </Link>
            <Link href="/servicios" className="hover:text-[#D99A00]">
              Servicios
            </Link>
            <Link href="/proyectos" className="hover:text-[#D99A00]">
              Proyectos
            </Link>
            <Link href="/contacto" className="hover:text-[#D99A00]">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D99A00]">
            Contacto
          </h3>

          <div className="space-y-3 text-sm text-[#D8C3A5]">
            <p>Coquimbo / Chile</p>
            <p>contacto@hoyri-arquitectura.cl</p>
            <p>Instagram · WhatsApp · Correo</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-[#D8C3A5]/70">
        © {new Date().getFullYear()} HOY’RI Arquitectura. Todos los derechos reservados.
      </div>
    </footer>
  )
}