export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-20 pt-[17rem] text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.4em]">
          Quiénes somos
        </p>

        <h1 className="max-w-5xl text-3xl font-semibold leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl">
          Diseñamos espacios desde la identidad, la materia y el contexto.
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
          <p className="text-base leading-7 text-[#D8C3A5] sm:text-lg sm:leading-8">
            OHY’RI Arquitectura nace con una mirada enfocada en desarrollar
            proyectos que conectan estética, funcionalidad y experiencia
            espacial. Cada propuesta se aborda desde una lectura sensible del
            entorno, las necesidades del cliente y el carácter propio del lugar.
          </p>

          <p className="text-base leading-7 text-[#D8C3A5] sm:text-lg sm:leading-8">
            Nuestra forma de trabajo busca transformar ideas en espacios
            habitables, equilibrando diseño contemporáneo, materialidad,
            planificación y una comunicación clara durante todo el proceso.
          </p>
        </div>
      </section>
    </main>
  )
}