import { conteudo, pendente } from '../data/conteudo'
import { Logo } from './ui/Logo'
import { Texto } from './ui/Texto'

const link =
  'inline-flex min-h-[44px] items-center underline decoration-dourado decoration-1 underline-offset-4 hover:decoration-2'

/** Seção 9. Logo, Instagram, contato, ano e o aviso sobre a optometria. */
export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-navy pb-28 pt-14 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <Logo arquivo="opto-anaclaudia-logo-branco.svg" escuro />

          <ul className="space-y-1 text-base">
            <li>
              <span className="sr-only">Instagram: </span>
              <a href={conteudo.instagram.link} target="_blank" rel="noopener noreferrer" className={link}>
                Instagram {conteudo.instagram.usuario}
              </a>
            </li>
            <li>
              <a href={conteudo.whatsapp.link} target="_blank" rel="noopener noreferrer" className={link}>
                WhatsApp {conteudo.whatsapp.exibicao}
              </a>
            </li>
            <li className="flex min-h-[44px] items-center gap-2">
              E-mail:{' '}
              {pendente(conteudo.email) ? (
                <Texto valor={conteudo.email} />
              ) : (
                <a href={`mailto:${conteudo.email}`} className={link}>
                  {conteudo.email}
                </a>
              )}
            </li>
          </ul>
        </div>

        <p className="mt-12 border-l-2 border-dourado pl-4 text-base text-white">
          A optometria não substitui a avaliação oftalmológica. Em caso de sintoma ou alteração na
          visão, procure um médico oftalmologista.
        </p>

        <p className="mt-10 border-t border-white/20 pt-6 text-base text-white/85">
          © {ano} {conteudo.marca}
        </p>
      </div>
    </footer>
  )
}
