import { conteudo } from '../data/conteudo'
import { Foto } from './ui/Foto'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'

/** Seção 6. Apresentação da Ana Cláudia, em primeira pessoa. */
export function QuemE() {
  return (
    <section aria-labelledby="titulo-quem-e" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
        <Revelar className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-nevoa to-claro/70">
            <Foto
              arquivo="ana-claudia-retrato.webp"
              proporcao="3 / 4"
              semFundo
              imgClassName="object-contain object-bottom"
              alt="Ana Cláudia, optometrista, sorrindo e apontando para o lado."
            />
          </div>
        </Revelar>

        <Revelar atraso={0.1}>
          <TituloSecao id="titulo-quem-e" sobretitulo="Quem é a Ana Cláudia" titulo="Muito prazer." />
          <p className="-mt-4 mb-6 font-display text-4xl font-semibold text-navy">Ana Cláudia</p>

          <ul className="mb-8 grid grid-cols-2 gap-4">
            {conteudo.experiencia.map((e) => (
              <li key={e.area} className="rounded-2xl bg-nevoa p-5">
                <span className="block font-display text-5xl font-semibold leading-none text-marca-texto [font-variant-numeric:lining-nums]">
                  {e.anos}
                </span>
                <span className="mt-2 block text-base font-medium text-navy">{e.area}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-lg text-navy/90">
            <p>Sou optometrista e atendo na casa das pessoas.</p>
            <p>Levo o equipamento, faço o exame com calma e volto para entregar o óculos.</p>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
