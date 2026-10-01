type Props = {
  id: string
  sobretitulo: string
  titulo: string
  claro?: boolean
  centralizado?: boolean
}

/** Cabeçalho padrão das seções, com o fio dourado como único detalhe. */
export function TituloSecao({ id, sobretitulo, titulo, claro, centralizado }: Props) {
  return (
    <header className={`mb-8 md:mb-12 ${centralizado ? 'text-center' : ''}`}>
      <p className={`text-base font-semibold uppercase tracking-[0.18em] ${claro ? 'text-white' : 'text-marca-texto'}`}>
        {sobretitulo}
      </p>
      <span aria-hidden="true" className={`mt-3 block h-px w-12 bg-dourado ${centralizado ? 'mx-auto' : ''}`} />
      <h2 id={id} className={`mt-4 text-[clamp(1.6rem,5.5vw,2.5rem)] font-semibold leading-tight ${claro ? 'text-white' : 'text-navy'}`}>
        {titulo}
      </h2>
    </header>
  )
}
