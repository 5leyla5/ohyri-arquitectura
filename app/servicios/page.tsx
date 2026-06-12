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
    <main className="min-h-screen bg-[#000000] px-5 pb-20 pt-[17rem] text-[#F5F5F5] sm:px-8 md:px-16 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <p className="font-body mb-4 text-xs uppercase tracking-[0.28em] text-[#D9A300] sm:text-sm sm:tracking-[0.4em]">
          Servicios
        </p>

        <h1 className="font-body max-w-4xl text-3xl font-semibold leading-[1.15] text-[#F5F5F5] sm:text-4xl md:text-5xl lg:text-6xl">
          Soluciones arquitectónicas para cada etapa del proyecto.
        </h1>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#D9A300]/70 hover:shadow-[0_0_35px_rgba(217,163,0,0.25)] sm:p-8"
            >
              <h2 className="font-body text-xl font-semibold text-[#D9A300] sm:text-2xl">
                {service.title}
              </h2>

              <p className="font-body mt-4 text-sm leading-7 text-[#D8D8D8] sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}