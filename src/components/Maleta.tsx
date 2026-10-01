import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'
import { Video } from './ui/Video'

/** Seção 5. A maleta de armações que vai até a casa da pessoa. */
export function Maleta() {
  return (
    <section aria-labelledby="titulo-maleta" className="bg-nevoa py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <TituloSecao
            id="titulo-maleta"
            sobretitulo="A maleta"
            titulo="Você experimenta as armações na sua sala, com a sua luz, diante do seu espelho."
          />
          <p className="-mt-2 mb-10 text-lg text-navy/90">Eu levo a maleta. Você prova com calma.</p>
        </Revelar>

        <div className="grid gap-4 md:grid-cols-[2fr_1fr] md:gap-6">
          <Revelar>
            <Video
              arquivo="maleta-armacoes"
              foto="maleta-armacoes.webp"
              proporcao="4 / 3"
              alt="Maleta de armações aberta sobre uma mesa de jantar de madeira, com armações de óculos organizadas em fileiras, ao lado de uma xícara de café."
            />
          </Revelar>
          <Revelar atraso={0.1} className="mx-auto w-full max-w-sm md:max-w-none">
            <Video
              arquivo="escolha-espelho"
              foto="escolha-espelho-poster.webp"
              proporcao="2 / 3"
              alt="Mulher na sala de casa experimentando um óculos de armação tartaruga diante de um espelho redondo, sorrindo."
            />
          </Revelar>
        </div>
      </div>
    </section>
  )
}
