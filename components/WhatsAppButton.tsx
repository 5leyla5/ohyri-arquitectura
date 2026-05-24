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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#D99A00] text-2xl text-black shadow-2xl transition hover:scale-110 hover:bg-[#F5EFE6]"
      aria-label="Contactar por WhatsApp"
    >
      ✦
    </a>
  )
}