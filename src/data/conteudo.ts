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

  experiencia: [
    { anos: '+10', area: 'anos na optometria' },
    { anos: '+20', area: 'anos no ramo ótico' },
  ],

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

  /** Cidades onde ela atende. */
  regiaoAtendida: 'Suzano, Poá, Mogi das Cruzes e toda a região do Alto Tietê',

  /** E-mail de contato. */
  email: 'anacns_2008@yahoo.com.br',

  /** Domínio do site, sem "https://". Ex.: "optoanaclaudia.com.br". */
  dominio: PREENCHER,

  /** Respostas do acordeão de dúvidas. As perguntas vêm do briefing. */
  duvidas: [
    { pergunta: 'Como funciona o atendimento em casa?', resposta: PREENCHER },
    { pergunta: 'Quanto tempo dura o exame?', resposta: PREENCHER },
    { pergunta: 'Preciso ter algum equipamento em casa?', resposta: PREENCHER },
    {
      pergunta: 'Vocês atendem qual região?',
      resposta: 'Atendo em Suzano, Poá, Mogi das Cruzes e em toda a região do Alto Tietê.',
    },
    { pergunta: 'Em quanto tempo o óculos fica pronto?', resposta: PREENCHER },
    { pergunta: 'Atende criança?', resposta: PREENCHER },
  ],
}

/** Verdadeiro enquanto o campo ainda não foi preenchido pela cliente. */
export function pendente(valor: string): boolean {
  return valor.includes(PREENCHER)
}
