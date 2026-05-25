import Image from 'next/image'

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
      className="fixed bottom-6 right-6 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#050505] p-1 shadow-[0_0_20px_rgba(217,154,0,0.35)] transition duration-300 hover:scale-110 hover:shadow-[0_0_28px_rgba(217,154,0,0.65)]"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/icons/whatsapp.png"
        alt="WhatsApp OHY’RI"
        width={40}
        height={40}
        className="h-12 w-12 object-contain"
      />
    </a>
  )
}