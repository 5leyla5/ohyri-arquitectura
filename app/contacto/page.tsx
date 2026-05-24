export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-20 pt-32 text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20 lg:pb-28 lg:pt-40">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.4em]">
            Contacto
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Conversemos sobre tu próximo proyecto.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#D8C3A5] sm:text-lg sm:leading-8">
            Completa el formulario o escríbenos directamente por WhatsApp para
            iniciar una conversación sobre tu idea, remodelación o proyecto
            arquitectónico.
          </p>

          <div className="mt-10 space-y-4 text-sm leading-6 text-[#D8C3A5] sm:text-base">
            <p>WhatsApp: +56 9 8670 1865</p>
            <p>Correo: contacto@ohyriarquitectura.cl</p>
            <p>Ubicación referencial: Coquimbo, Chile</p>
          </div>
        </div>

        <form className="w-full rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Nombre
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Correo
              </label>
              <input
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Tipo de proyecto
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Vivienda, remodelación, local comercial..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Cuéntanos sobre tu proyecto"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#D99A00] px-7 py-3 font-semibold text-black transition hover:bg-[#F5EFE6] sm:w-auto"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}