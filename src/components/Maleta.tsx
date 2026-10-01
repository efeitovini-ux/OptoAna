import { Foto } from './ui/Foto'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'

/** Seção 5. A maleta de armações que vai até a casa da pessoa. */
export function Maleta() {
  return (
    <section aria-labelledby="titulo-maleta" className="bg-nevoa py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Revelar>
          <TituloSecao
            id="titulo-maleta"
            sobretitulo="A maleta"
            titulo="Você experimenta as armações na sua sala, com a sua luz, diante do seu espelho."
          />
          <div className="-mt-2 space-y-4 text-lg text-navy/90">
            <p>Eu levo uma maleta com armações para você escolher sem sair de casa.</p>
            <p>
              Dá para provar com calma, comparar e pedir a opinião de quem mora com você. Sem
              vendedor esperando, sem balcão.
            </p>
          </div>
        </Revelar>

        <Revelar atraso={0.1}>
          <Foto
            arquivo="maleta-armacoes.webp"
            proporcao="3 / 2"
            alt="Maleta aberta sobre uma mesa de jantar de madeira, com dezenas de armações de óculos organizadas em fileiras, ao lado de uma xícara de café e da luz de uma janela."
          />
        </Revelar>
      </div>
    </section>
  )
}
