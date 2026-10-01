import { useState } from 'react'

type Props = {
  /** Nome do arquivo esperado em public/img/. */
  arquivo: string
  alt: string
  /** Proporção da foto, ex.: "3 / 4" ou "4 / 3" (as do Gemini). */
  proporcao: string
  className?: string
  imgClassName?: string
  prioridade?: boolean
}

/**
 * Foto do site. Enquanto o arquivo não existir em public/img/, mostra uma
 * caixa cinza na proporção certa com o nome do arquivo que falta.
 */
export function Foto({ arquivo, alt, proporcao, className = '', imgClassName = '', prioridade }: Props) {
  const [faltando, setFaltando] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#e3e8ec] ${className}`}
      style={{ aspectRatio: proporcao }}
    >
      {faltando ? (
        <div role="img" aria-label={alt} className="arquivo-pendente absolute inset-0 flex-col gap-1">
          <span className="text-base font-semibold">Foto pendente</span>
          <code className="break-all text-base">public/img/{arquivo}</code>
        </div>
      ) : (
        <img
          src={`/img/${arquivo}`}
          alt={alt}
          loading={prioridade ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFaltando(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
