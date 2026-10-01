import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BotaoWhatsApp } from './ui/BotaoWhatsApp'
import { Foto } from './ui/Foto'
import { Logo } from './ui/Logo'

/**
 * Seção 1. O título é composto como uma tabela de optotipos: cada linha menor
 * que a anterior, com o espaçamento entre letras fechando conforme desce.
 * As medidas usam clamp() para manter a proporção da escala em qualquer tela.
 */
export function Hero() {
  const reduzirMovimento = useReducedMotion()
  const [rolou, setRolou] = useState(false)

  // A foto entra levemente desfocada e ganha nitidez quando a página rola.
  useEffect(() => {
    if (reduzirMovimento) return
    const aoRolar = () => {
      if (window.scrollY > 0) {
        setRolou(true)
        window.removeEventListener('scroll', aoRolar)
      }
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [reduzirMovimento])

  const desfoque = reduzirMovimento || rolou ? 'blur(0px)' : 'blur(8px)'

  return (
    <section aria-labelledby="titulo-hero" className="bg-nevoa">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-5 sm:px-6 md:pb-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-8">
        <div className="lg:col-span-2">
          <Logo arquivo="opto-anaclaudia-logo.svg" />
        </div>

        <div className="mt-10 text-center lg:mt-6">
          <h1 id="titulo-hero" className="font-sans font-bold uppercase leading-none text-navy">
            <span className="block whitespace-nowrap pl-[0.32em] text-[clamp(2rem,11.5vw,6rem)] tracking-[0.32em]">
              A visão
            </span>
            <span className="mt-[0.7em] block pl-[0.2em] text-[clamp(1.25rem,6.2vw,3.25rem)] tracking-[0.2em]">
              vai até você
            </span>
            <span className="mt-[1.1em] block pl-[0.04em] text-[clamp(1.0625rem,4.4vw,1.75rem)] font-medium normal-case tracking-[0.04em] text-apoio">
              exame de vista na sua casa
            </span>
          </h1>

          <span aria-hidden="true" className="mx-auto mt-8 block h-px w-16 bg-dourado" />

          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-navy md:text-xl">
            Exame de vista na sua casa. Sem fila, sem deslocamento, sem pressa.
          </p>

          <div className="mt-8">
            <BotaoWhatsApp texto="Agendar pelo WhatsApp" grande />
          </div>
        </div>

        <motion.div
          className="mx-auto mt-12 w-full max-w-md lg:mt-6 lg:max-w-none"
          initial={false}
          animate={{ filter: desfoque }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Foto
            arquivo="hero-exame-casa.webp"
            proporcao="4 / 5"
            prioridade
            alt="Optometrista sentada ao lado de uma senhora de cabelos grisalhos, na poltrona da sala de casa, segurando uma armação de prova diante do rosto dela. Luz natural entra pela janela."
          />
        </motion.div>
      </div>
    </section>
  )
}
