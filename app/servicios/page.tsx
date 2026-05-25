const services = [
  {
    title: 'Diseño arquitectónico',
    description:
      'Desarrollo de propuestas arquitectónicas para viviendas, espacios comerciales y proyectos personalizados.',
  },
  {
    title: 'Remodelaciones',
    description:
      'Transformación de espacios existentes, optimizando distribución, estética y funcionalidad.',
  },
  {
    title: 'Interiorismo',
    description:
      'Diseño de ambientes interiores con foco en materialidad, iluminación, mobiliario y experiencia de uso.',
  },
  {
    title: 'Visualización 3D',
    description:
      'Representaciones visuales para comprender mejor el proyecto antes de su ejecución.',
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-20 pt-[17rem] text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20">
        <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.4em]">
          Servicios
        </p>

        <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl">
          Soluciones arquitectónicas para cada etapa del proyecto.
        </h1>
          
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-[#111111] p-6 transition hover:border-[#D99A00]/60 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-[#D99A00] sm:text-2xl">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#D8C3A5] sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}