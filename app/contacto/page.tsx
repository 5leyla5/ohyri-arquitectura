'use client'

import { useState } from 'react'

export default function ContactoPage() {
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setStatusMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setStatusMessage(result.error || 'No se pudo enviar el mensaje.')
        return
      }

      setStatusMessage('Mensaje enviado correctamente. Te contactaremos pronto.')
      form.reset()
    } catch (error) {
      setStatusMessage('Ocurrió un error. Intenta nuevamente.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 pb-20 pt-[17rem] text-[#F5EFE6] sm:px-8 md:px-16 lg:px-20">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D99A00] sm:text-sm sm:tracking-[0.4em]">
            Contacto
          </p>

          <h1 className="text-3xl font-semibold leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl">
            Conversemos sobre tu próximo proyecto.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#D8C3A5] sm:text-lg sm:leading-8">
            Completa el formulario o escríbenos directamente por WhatsApp para
            iniciar una conversación sobre tu idea, remodelación o proyecto
            arquitectónico.
          </p>

          <div className="mt-10 space-y-4 text-sm leading-6 text-[#D8C3A5] sm:text-base">
            <p>WhatsApp: +56 9 8670 1865</p>
            <p>Correo: contacto@hoyri-arquitectura.cl</p>
            <p>Ubicación referencial: Coquimbo, Chile</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full rounded-3xl border border-white/10 bg-[#111111] p-5 shadow-2xl sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Nombre *
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Correo *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Teléfono
              </label>
              <input
                name="phone"
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="+56 9..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Tipo de proyecto
              </label>
              <input
                name="projectType"
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Vivienda, remodelación, local comercial..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#D8C3A5]">
                Mensaje *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#050505] px-4 py-3 text-[#F5EFE6] outline-none transition focus:border-[#D99A00]"
                placeholder="Cuéntanos sobre tu proyecto"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-[#D99A00] px-7 py-3 font-semibold text-black transition hover:bg-[#F5EFE6] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {statusMessage && (
              <p className="text-center text-sm text-[#D8C3A5]">
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  )
}