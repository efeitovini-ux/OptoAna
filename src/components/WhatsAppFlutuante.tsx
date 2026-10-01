import { conteudo } from '../data/conteudo'
import { IconeWhatsApp } from './ui/IconeWhatsApp'

/** Botão fixo no canto inferior direito, sempre ao alcance do polegar. */
export function WhatsAppFlutuante() {
  return (
    <a
      href={conteudo.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Ana Cláudia pelo WhatsApp (abre em uma nova aba)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-marca text-white shadow-lg shadow-navy/25 ring-2 ring-white transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 md:bottom-6 md:right-6"
    >
      <IconeWhatsApp className="h-8 w-8" />
    </a>
  )
}
