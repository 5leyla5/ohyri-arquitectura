'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre.'),
  email: z
    .string()
    .min(1, 'Ingresa tu correo.')
    .email('Ingresa un correo válido.'),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactoPage() {
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setStatusMessage('')
    setStatusType('')

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
        setStatusType('error')
        return
      }

      setStatusMessage('Mensaje enviado correctamente. Te contactaremos pronto.')
      setStatusType('success')
      reset()
    } catch (error) {
      setStatusMessage('Ocurrió un error. Intenta nuevamente.')
      setStatusType('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#000000] px-5 pb-20 pt-[17rem] text-[#F5F5F5] sm:px-8 md:px-16 lg:px-20">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-body mb-4 text-xs uppercase tracking-[0.32em] text-[#D9A300] sm:text-sm">
            Contacto
          </p>

          <h1 className="font-body max-w-3xl text-3xl font-semibold leading-[1.15] text-[#F5F5F5] sm:text-4xl md:text-5xl">
            Conversemos sobre tu próximo proyecto.
          </h1>

          <p className="font-body mt-6 max-w-xl text-base leading-8 text-[#D8D8D8] sm:text-lg">
            Escríbenos para cotizar, resolver dudas o iniciar el desarrollo de
            una propuesta arquitectónica personalizada.
          </p>

          <div className="font-body mt-10 space-y-4 text-base text-[#D8D8D8]">
            <p>
              <span className="text-[#D9A300]">Ubicación:</span> Coquimbo /
              Chile
            </p>
            <p>
              <span className="text-[#D9A300]">Correo:</span>{' '}
              contacto@hoyri-arquitectura.cl
            </p>
            <p>
              <span className="text-[#D9A300]">Atención:</span> Consultas,
              asesorías y proyectos personalizados
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full rounded-3xl border border-[#2A2A2A] bg-[#0A0A0A] p-5 shadow-2xl transition hover:border-[#D9A300]/50 sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label className="font-body mb-2 block text-sm text-[#F5F5F5]">
                Nombre *
              </label>

              <input
                type="text"
                {...register('name')}
                className={`font-body w-full rounded-2xl border bg-[#000000] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#D8D8D8]/40 ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#D9A300]'
                }`}
                placeholder="Tu nombre"
              />

              {errors.name && (
                <p className="font-body mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-body mb-2 block text-sm text-[#F5F5F5]">
                Correo *
              </label>

              <input
                type="email"
                {...register('email')}
                className={`font-body w-full rounded-2xl border bg-[#000000] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#D8D8D8]/40 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#D9A300]'
                }`}
                placeholder="correo@ejemplo.com"
              />

              {errors.email && (
                <p className="font-body mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-body mb-2 block text-sm text-[#F5F5F5]">
                Teléfono
              </label>

              <input
                type="text"
                {...register('phone')}
                className="font-body w-full rounded-2xl border border-[#2A2A2A] bg-[#000000] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#D8D8D8]/40 focus:border-[#D9A300]"
                placeholder="+56 9..."
              />
            </div>

            <div>
              <label className="font-body mb-2 block text-sm text-[#F5F5F5]">
                Tipo de proyecto
              </label>

              <select
                {...register('projectType')}
                className="font-body w-full rounded-2xl border border-[#2A2A2A] bg-[#000000] px-4 py-3 text-[#F5F5F5] outline-none transition focus:border-[#D9A300]"
              >
                <option value="">Selecciona una opción</option>
                <option value="Diseño arquitectónico">
                  Diseño arquitectónico
                </option>
                <option value="Remodelación">Remodelación</option>
                <option value="Interiorismo">Interiorismo</option>
                <option value="Visualización 3D">Visualización 3D</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="font-body mb-2 block text-sm text-[#F5F5F5]">
                Mensaje *
              </label>

              <textarea
                rows={5}
                {...register('message')}
                className={`font-body w-full resize-none rounded-2xl border bg-[#000000] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#D8D8D8]/40 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#D9A300]'
                }`}
                placeholder="Cuéntanos sobre tu proyecto"
              />

              {errors.message && (
                <p className="font-body mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="font-body mt-2 rounded-full bg-[#D9A300] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {statusMessage && (
              <p
                className={`font-body rounded-2xl border px-4 py-3 text-sm ${
                  statusType === 'success'
                    ? 'border-[#D9A300]/50 bg-[#D9A300]/10 text-[#D9A300]'
                    : 'border-red-500/50 bg-red-500/10 text-red-400'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  )
}