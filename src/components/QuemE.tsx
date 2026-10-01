import { conteudo } from '../data/conteudo'
import { Foto } from './ui/Foto'
import { Revelar } from './ui/Revelar'
import { Texto } from './ui/Texto'
import { TituloSecao } from './ui/TituloSecao'

/** Seção 6. Apresentação da Ana Cláudia, em primeira pessoa. */
export function QuemE() {
  return (
    <section aria-labelledby="titulo-quem-e" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
        <Revelar className="mx-auto w-full max-w-sm lg:max-w-none">
          <Foto
            arquivo="ana-claudia-retrato.webp"
            proporcao="3 / 4"
            alt="Retrato da optometrista Ana Cláudia sorrindo, em uma sala com luz de janela."
          />
        </Revelar>

        <Revelar atraso={0.1}>
          <TituloSecao id="titulo-quem-e" sobretitulo="Quem é a Ana Cláudia" titulo="Muito prazer." />
          <p className="-mt-4 mb-6 font-display text-4xl font-semibold text-navy">Ana Cláudia</p>
          <div className="space-y-4 text-lg text-navy/90">
            <p>Sou optometrista e atendo na casa das pessoas.</p>
            <p>Levo o equipamento, faço o exame com calma e volto para entregar o óculos.</p>
            <p>
              Trabalho com optometria há <Texto valor={conteudo.anosExperiencia} /> anos.
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
