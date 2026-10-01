import { useState } from 'react'

type Props = {
  arquivo: 'opto-anaclaudia-logo.png' | 'opto-anaclaudia-logo-branco.png' | 'opto-anaclaudia-simbolo.png'
  className?: string
  escuro?: boolean
}

/**
 * Logo oficial da Ana Cláudia, lida de public/brand/. A logo nunca é
 * redesenhada aqui: enquanto o arquivo não for entregue, aparece apenas uma
 * caixa com o nome do arquivo que falta.
 */
export function Logo({ arquivo, className = '', escuro }: Props) {
  const [faltando, setFaltando] = useState(false)

  if (faltando) {
    return (
      <div
        role="img"
        aria-label="Opto.AnaClaudia"
        className={`inline-flex min-h-[56px] flex-col items-start justify-center rounded-xl border-2 border-dashed px-3 py-2 text-left ${
          escuro ? 'border-white/60 text-white' : 'border-apoio text-navy'
        } ${className}`}
      >
        <span className="text-base font-semibold">Logo pendente</span>
        <code className="break-all text-base">public/brand/{arquivo}</code>
      </div>
    )
  }

  return (
    <img
      src={`/brand/${arquivo}`}
      alt="Opto.AnaClaudia"
      onError={() => setFaltando(true)}
      className={`h-16 w-auto md:h-20 ${className}`}
    />
  )
}
