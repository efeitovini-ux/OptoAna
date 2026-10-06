import { conteudo } from '../data/conteudo'
import { BotaoWhatsApp } from './ui/BotaoWhatsApp'
import { Revelar } from './ui/Revelar'
import { Texto } from './ui/Texto'
import { TituloSecao } from './ui/TituloSecao'

/** Seção 8. WhatsApp em destaque e região atendida. */
export function Contato() {
  return (
    <section aria-labelledby="titulo-contato" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Revelar>
          <div className="rounded-2xl border border-claro bg-nevoa px-5 py-10 text-center sm:px-10 md:py-14">
            <div className="mx-auto max-w-2xl">
              <TituloSecao id="titulo-contato" sobretitulo="Contato" titulo="Vamos combinar o seu atendimento?" centralizado />
            </div>

            <p className="mx-auto -mt-2 max-w-xl text-lg text-navy/90">
              Mande uma mensagem. A gente conversa, tira as dúvidas e combina o dia.
            </p>

            <div className="mt-8">
              <BotaoWhatsApp texto="Chamar no WhatsApp" grande className="w-full sm:w-auto" />
            </div>

            <p className="mt-5 text-xl font-semibold text-navy">
              <a
                href={conteudo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center underline decoration-dourado decoration-2 underline-offset-4 hover:text-marca-texto"
              >
                {conteudo.whatsapp.exibicao}
                <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
              </a>
            </p>

            <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-5">
              <p className="text-base font-semibold uppercase tracking-[0.12em] text-marca-texto">Região atendida</p>
              <p className="mt-2 text-lg text-navy">
                <Texto valor={conteudo.regiaoAtendida} />
              </p>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
