import { BotaoWhatsApp } from './ui/BotaoWhatsApp'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'
import { Video } from './ui/Video'

const passos = [
  {
    titulo: 'Você chama no WhatsApp',
    texto: 'Conte quem vai fazer o exame: você, sua mãe, seu filho ou a família toda.',
  },
  {
    titulo: 'A gente combina o dia',
    texto: 'Escolhemos juntos o melhor dia para a sua casa.',
  },
  {
    titulo: 'Eu vou até você',
    texto: 'Levo o equipamento e a maleta de armações. O exame é feito ali, com calma.',
  },
  {
    titulo: 'Eu volto com o óculos pronto',
    texto: 'Entrego na sua casa e ajusto no rosto de quem vai usar.',
  },
]

/** Seção 4. Quatro passos numerados, do primeiro contato à entrega. */
export function ComoFunciona() {
  return (
    <section aria-labelledby="titulo-como-funciona" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <TituloSecao
            id="titulo-como-funciona"
            sobretitulo="Como funciona"
            titulo="Você chama no WhatsApp. A gente combina o dia. Eu vou até você."
          />
        </Revelar>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {passos.map((passo, i) => (
            <li key={passo.titulo}>
              <Revelar atraso={i * 0.05} className="h-full border-t border-claro pt-5">
                <span aria-hidden="true" className="font-display text-5xl font-semibold leading-none text-marca-texto [font-variant-numeric:lining-nums]">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-navy">
                  <span className="sr-only">Passo {i + 1}: </span>
                  {passo.titulo}
                </h3>
                <p className="mt-2 text-base text-navy/90">{passo.texto}</p>
              </Revelar>
            </li>
          ))}
        </ol>

        <Revelar className="mx-auto mt-14 max-w-4xl">
          <Video
            arquivo="entrega-oculos"
            foto="entrega-oculos-poster.webp"
            proporcao="16 / 9"
            alt="Senhor de cabelos brancos, no sofá de casa, usando o óculos novo. Ele lê o jornal, olha para a janela e sorri."
          />
        </Revelar>

        <Revelar className="mt-12">
          <BotaoWhatsApp texto="Chamar no WhatsApp" />
        </Revelar>
      </div>
    </section>
  )
}
