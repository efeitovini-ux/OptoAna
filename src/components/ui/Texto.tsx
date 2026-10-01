import { PREENCHER } from '../../data/conteudo'

/**
 * Mostra um texto vindo de src/data/conteudo.ts. Qualquer trecho [PREENCHER]
 * ganha o destaque amarelo, para não passar despercebido.
 */
export function Texto({ valor }: { valor: string }) {
  const partes = valor.split(PREENCHER)
  return (
    <>
      {partes.map((parte, i) => (
        <span key={i}>
          {parte}
          {i < partes.length - 1 && <mark className="preencher">{PREENCHER}</mark>}
        </span>
      ))}
    </>
  )
}
