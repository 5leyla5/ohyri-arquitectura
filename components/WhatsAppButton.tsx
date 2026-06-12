export default function WhatsAppButton() {
  const phoneNumber = '56986701865'
  const message = 'Hola, quiero consultar por un proyecto de arquitectura.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#000000] shadow-[0_0_22px_rgba(217,163,0,0.55)] transition duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(217,163,0,0.85)]"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 text-[#D9A300]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 8C18.7 8 8 18.2 8 30.8c0 4.7 1.5 9.1 4.1 12.7L9 56l13.1-3.1c3 1.5 6.4 2.3 9.9 2.3 13.3 0 24-10.2 24-22.8S45.3 8 32 8Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M24.5 21.5c-.8.2-2.9 1.6-2.9 4.9 0 3.4 2.4 7.7 5.7 11 3.4 3.4 8.6 6.1 12.2 6.1 3.3 0 4.7-2.1 4.9-2.9.2-.7.1-1.2-.4-1.5l-5.2-2.5c-.5-.2-1-.1-1.3.3l-2.1 2.5c-.4.4-.9.5-1.4.2-1.6-.8-3.4-2.1-5-3.7-1.6-1.6-2.9-3.3-3.7-5-.3-.5-.2-1 .2-1.4l2.5-2.1c.4-.4.5-.9.3-1.4l-2.4-5.1c-.3-.6-.8-.7-1.4-.5Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}