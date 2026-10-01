import { Foto } from './ui/Foto'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'

const cartoes = [
  {
    titulo: 'Quem não dirige mais',
    texto:
      'Depender de alguém para levar, esperar na loja, voltar cansado. Em casa, nada disso acontece.',
  },
  {
    titulo: 'Criança pequena',
    texto:
      'Em lugar estranho, ela chora e o exame não sai. No sofá de casa, ela fica à vontade e colabora.',
  },
  {
    titulo: 'Quem tem mobilidade reduzida',
    texto:
      'Escada, calçada, transporte: tudo vira obstáculo. Aqui ninguém precisa sair de casa.',
  },
  {
    titulo: 'Quem trabalha o dia todo',
    texto:
      'A ótica fecha antes de você sair do trabalho. O atendimento é marcado no dia que combinarmos.',
  },
  {
    titulo: 'A família inteira',
    texto: 'Uma visita só. Todo mundo da casa faz o exame no mesmo dia.',
  },
]

/** Seção 2. Cada cartão fala de uma dificuldade real de ir até a ótica. */
export function ParaQuemE() {
  return (
    <section aria-labelledby="titulo-para-quem" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
          <Revelar>
            <TituloSecao
              id="titulo-para-quem"
              sobretitulo="Para quem é"
              titulo="Sua mãe não precisa mais depender de alguém para ir até a ótica."
            />
            <p className="-mt-2 max-w-2xl text-lg text-apoio">
              Muitas vezes quem marca não é quem vai usar o óculos. É o filho, a filha, quem cuida.
              Se é o seu caso, este atendimento foi pensado para você também.
            </p>
          </Revelar>
          <Revelar atraso={0.1}>
            <Foto
              arquivo="crianca-exame.webp"
              proporcao="4 / 3"
              alt="Menina sorrindo à mesa da sala de casa, olhando através de uma armação de prova segurada com cuidado por uma mão adulta."
            />
          </Revelar>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {cartoes.map((cartao, i) => (
            <li key={cartao.titulo} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <Revelar atraso={i * 0.05} className="h-full">
                <article className="h-full rounded-2xl border border-claro/60 bg-nevoa p-6">
                  <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-teal" />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{cartao.titulo}</h3>
                  <p className="mt-2 text-base text-navy/90">{cartao.texto}</p>
                </article>
              </Revelar>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
