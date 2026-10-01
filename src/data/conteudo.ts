// Arquivo único de dados do site.
//
// Tudo que ainda depende da cliente está marcado como PREENCHER (abaixo).
// Enquanto um campo tiver esse valor, ele aparece na tela com fundo amarelo
// claro, para que seja impossível publicar sem notar. Para preencher, basta
// trocar o texto entre aspas. Nada mais no código precisa ser alterado.

export const PREENCHER = '[PREENCHER]'

const telefoneDigitos = '5511995023658'
const mensagemWhatsApp =
  'Olá, Ana Cláudia! Vim pelo site e gostaria de agendar um atendimento em casa.'

export const conteudo = {
  marca: 'Opto.AnaClaudia',
  nome: 'Ana Cláudia',

  whatsapp: {
    exibicao: '+55 11 99502-3658',
    telefoneInternacional: '+55-11-99502-3658',
    link: `https://wa.me/${telefoneDigitos}?text=${encodeURIComponent(mensagemWhatsApp)}`,
    mensagem: mensagemWhatsApp,
  },

  instagram: {
    usuario: '@opto.anaclaudia',
    link: 'https://instagram.com/opto.anaclaudia',
  },

  // ---- Campos que a cliente ainda precisa informar ----

  /** Bairros ou cidades onde ela atende. Ex.: "Zona Sul de São Paulo". */
  regiaoAtendida: PREENCHER,

  /** Dias e horários de atendimento. */
  horario: PREENCHER,

  /** E-mail de contato. */
  email: PREENCHER,

  /** Domínio do site, sem "https://". Ex.: "optoanaclaudia.com.br". */
  dominio: PREENCHER,

  /** Quantos anos de experiência ela tem (só o número). */
  anosExperiencia: PREENCHER,

  /** Respostas do acordeão de dúvidas. As perguntas vêm do briefing. */
  duvidas: [
    { pergunta: 'Como funciona o atendimento em casa?', resposta: PREENCHER },
    { pergunta: 'Quanto tempo dura o exame?', resposta: PREENCHER },
    { pergunta: 'Preciso ter algum equipamento em casa?', resposta: PREENCHER },
    { pergunta: 'Vocês atendem qual região?', resposta: PREENCHER },
    { pergunta: 'Em quanto tempo o óculos fica pronto?', resposta: PREENCHER },
    { pergunta: 'Atende criança?', resposta: PREENCHER },
  ],
}

/** Verdadeiro enquanto o campo ainda não foi preenchido pela cliente. */
export function pendente(valor: string): boolean {
  return valor.includes(PREENCHER)
}
