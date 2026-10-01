import { conteudo } from '../../data/conteudo'
import { IconeWhatsApp } from './IconeWhatsApp'

type Props = {
  texto?: string
  grande?: boolean
  className?: string
}

/** Botão principal: abre a conversa no WhatsApp com a mensagem pronta. */
export function BotaoWhatsApp({ texto = 'Chamar no WhatsApp', grande, className = '' }: Props) {
  return (
    <a
      href={conteudo.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-marca-texto font-semibold text-white shadow-sm transition-colors hover:bg-navy ${
        grande ? 'px-7 py-4 text-xl' : 'px-6 py-3 text-base'
      } ${className}`}
    >
      <IconeWhatsApp className={grande ? 'h-7 w-7' : 'h-6 w-6'} />
      <span>{texto}</span>
      <span className="sr-only">(abre o WhatsApp em uma nova aba)</span>
    </a>
  )
}
