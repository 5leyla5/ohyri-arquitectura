import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, phone, projectType, message } = body

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'HOYRI Arquitectura <onboarding@resend.dev>',
      to: ['leylasq90@gmail.com'],
      replyTo: email,
      subject: `Nuevo mensaje desde la web HOYRI - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111;">
          <h2>Nuevo contacto desde la web HOYRI Arquitectura</h2>

          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || 'No indicado'}</p>
          <p><strong>Tipo de proyecto:</strong> ${projectType || 'No indicado'}</p>

          <hr />

          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    if (error) {
      return Response.json(
        { error: 'No se pudo enviar el correo.' },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: 'Mensaje enviado correctamente.' },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}