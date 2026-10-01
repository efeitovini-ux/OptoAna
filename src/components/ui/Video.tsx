import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Foto } from './Foto'

type Props = {
  /** Nome do arquivo em public/video/, sem extensão (precisa existir .webm e .mp4). */
  arquivo: string
  /** Foto em public/img/ mostrada antes do vídeo e para quem pediu menos movimento. */
  foto: string
  alt: string
  proporcao: string
}

/**
 * Vídeo curto e sem som, em loop. Só toca enquanto está na tela, tem botão de
 * pausa e, para quem pediu menos movimento, vira a foto parada.
 */
export function Video({ arquivo, foto, alt, proporcao }: Props) {
  const reduzirMovimento = useReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)
  const [pausadoPeloUsuario, setPausadoPeloUsuario] = useState(false)
  const [tocando, setTocando] = useState(false)
  const [falhou, setFalhou] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video || reduzirMovimento || pausadoPeloUsuario) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 },
    )
    observador.observe(video)
    return () => observador.disconnect()
  }, [reduzirMovimento, pausadoPeloUsuario])

  if (reduzirMovimento || falhou) {
    return <Foto arquivo={foto} alt={alt} proporcao={proporcao} />
  }

  const alternar = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      setPausadoPeloUsuario(false)
      video.play().catch(() => {})
    } else {
      setPausadoPeloUsuario(true)
      video.pause()
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#e3e8ec]" style={{ aspectRatio: proporcao }}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster={`/img/${foto}`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
      >
        <source src={`/video/${arquivo}.webm`} type="video/webm" />
        {/* Se nenhum formato tocar, o erro chega no último source e a foto assume. */}
        <source src={`/video/${arquivo}.mp4`} type="video/mp4" onError={() => setFalhou(true)} />
      </video>
      <button
        type="button"
        onClick={alternar}
        aria-label={tocando ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 text-white backdrop-blur-sm hover:bg-navy"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="h-5 w-5" fill="currentColor">
          {tocando ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5.5v13l10.5-6.5z" />}
        </svg>
      </button>
    </div>
  )
}
