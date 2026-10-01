import { useId, useState } from 'react'
import { conteudo } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Texto } from './ui/Texto'
import { TituloSecao } from './ui/TituloSecao'

function Pergunta({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberta, setAberta] = useState(false)
  const id = useId()
  const idBotao = `${id}-botao`
  const idPainel = `${id}-painel`

  return (
    <li className="border-b border-claro">
      <h3>
        <button
          type="button"
          id={idBotao}
          aria-expanded={aberta}
          aria-controls={idPainel}
          onClick={() => setAberta((a) => !a)}
          className="flex min-h-[64px] w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-navy hover:text-marca-texto"
        >
          <span>{pergunta}</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className={`h-6 w-6 shrink-0 text-marca-texto transition-transform duration-200 motion-reduce:transition-none ${aberta ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <div id={idPainel} role="region" aria-labelledby={idBotao} hidden={!aberta} className="pb-6 pr-10 text-base text-navy/90">
        <p>
          <Texto valor={resposta} />
        </p>
      </div>
    </li>
  )
}

/** Seção 7. Acordeão de dúvidas, navegável por teclado. */
export function Duvidas() {
  return (
    <section aria-labelledby="titulo-duvidas" className="bg-nevoa py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <TituloSecao id="titulo-duvidas" sobretitulo="Dúvidas" titulo="Perguntas que costumam chegar." />
        </Revelar>
        <Revelar>
          <ul className="border-t border-claro">
            {conteudo.duvidas.map((d) => (
              <Pergunta key={d.pergunta} pergunta={d.pergunta} resposta={d.resposta} />
            ))}
          </ul>
        </Revelar>
      </div>
    </section>
  )
}
