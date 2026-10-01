import type { ReactNode } from 'react'
import { Revelar } from './ui/Revelar'
import { TituloSecao } from './ui/TituloSecao'

function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-9 w-9 text-teal"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const servicos = [
  {
    titulo: 'Exame de refração',
    texto: 'A medição do seu grau, feita na sua casa, com o equipamento que eu levo.',
    icone: (
      <Icone>
        <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </Icone>
    ),
  },
  {
    titulo: 'Adaptação de lente de contato',
    texto: 'Avalio, ajudo a escolher a lente e ensino a colocar, tirar e guardar.',
    icone: (
      <Icone>
        <path d="M4 13a8 8 0 0 0 16 0" />
        <path d="M4 13c2.2-1.6 5-2.5 8-2.5s5.8.9 8 2.5" />
        <path d="M12 3.5v3" />
      </Icone>
    ),
  },
  {
    titulo: 'Óculos e armações',
    texto: 'Você escolhe a armação em casa. Eu volto para entregar o óculos pronto.',
    icone: (
      <Icone>
        <circle cx="6.5" cy="14" r="3.5" />
        <circle cx="17.5" cy="14" r="3.5" />
        <path d="M10 14c.6-.8 1.3-1.2 2-1.2s1.4.4 2 1.2" />
        <path d="M3 14 4.5 7.5H6M21 14l-1.5-6.5H18" />
      </Icone>
    ),
  },
  {
    titulo: 'Treinamento visual',
    texto: 'Exercícios orientados para mais conforto visual na leitura, nas telas e no dia a dia.',
    icone: (
      <Icone>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" />
      </Icone>
    ),
  },
]

/** Seção 3. Os quatro serviços, com ícone em teal e texto curto. */
export function Servicos() {
  return (
    <section aria-labelledby="titulo-servicos" className="bg-nevoa py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <TituloSecao id="titulo-servicos" sobretitulo="O que a Ana Cláudia faz" titulo="Tudo acontece na sua casa." />
        </Revelar>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {servicos.map((servico, i) => (
            <li key={servico.titulo}>
              <Revelar atraso={i * 0.05} className="h-full">
                <article className="h-full rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(24,48,79,0.08)]">
                  {servico.icone}
                  <h3 className="mt-4 text-xl font-semibold text-navy">{servico.titulo}</h3>
                  <p className="mt-2 text-base text-navy/90">{servico.texto}</p>
                </article>
              </Revelar>
            </li>
          ))}
        </ul>

        <Revelar>
          <p className="mt-10 max-w-2xl text-base text-apoio">
            Se no exame eu perceber algo que precisa de um olhar médico, faço o encaminhamento ao
            oftalmologista.
          </p>
        </Revelar>
      </div>
    </section>
  )
}
