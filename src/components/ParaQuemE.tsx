import { Foto } from './ui/Foto'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'

const pessoas = [
  {
    foto: 'para-mae.webp',
    alt: 'Senhora de cabelos grisalhos sorrindo na poltrona de casa, com uma armação de prova no rosto.',
    titulo: 'Para a sua mãe',
    texto: 'Sem depender de carona.',
  },
  {
    foto: 'para-filho.webp',
    alt: 'Menina sorrindo à mesa da sala, olhando através de uma armação de prova.',
    titulo: 'Para o seu filho',
    texto: 'Em casa, ele fica à vontade.',
  },
  {
    foto: 'para-pai.webp',
    alt: 'Mãos ajustando a haste de um óculos novo no rosto de um senhor, dentro de casa.',
    titulo: 'Para o seu pai',
    texto: 'O óculos chega pronto e ajustado.',
  },
]

const outros = ['Mobilidade reduzida', 'Quem trabalha o dia todo', 'A família inteira, numa visita só']

/** Seção 2. Para quem o atendimento em casa resolve a vida. */
export function ParaQuemE() {
  return (
    <section aria-labelledby="titulo-para-quem" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <TituloSecao
            id="titulo-para-quem"
            sobretitulo="Para quem é"
            titulo="Sua mãe não precisa mais depender de alguém para ir até a ótica."
          />
        </Revelar>

        <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {pessoas.map((p, i) => (
            <li key={p.titulo}>
              <Revelar atraso={i * 0.08}>
                <figure className="flex items-center gap-4 sm:block">
                  <Foto arquivo={p.foto} alt={p.alt} proporcao="3 / 4" className="w-[40%] shrink-0 sm:w-auto" />
                  <figcaption className="sm:mt-4">
                    <span className="block text-xl font-semibold text-navy">{p.titulo}</span>
                    <span className="mt-1 block text-base text-apoio">{p.texto}</span>
                  </figcaption>
                </figure>
              </Revelar>
            </li>
          ))}
        </ul>

        <Revelar>
          <p className="sr-only">Também para:</p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {outros.map((o) => (
              <li
                key={o}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-claro bg-nevoa px-4 py-2 text-base font-medium text-navy"
              >
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal" />
                {o}
              </li>
            ))}
          </ul>
        </Revelar>
      </div>
    </section>
  )
}
