# Opto.AnaClaudia · site institucional

Página única da Ana Cláudia, optometrista que atende a domicílio.
Vite + React + TypeScript + Tailwind CSS + Framer Motion. Sem backend: todo
contato vai para o WhatsApp.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ (é o que a Vercel publica)
```

Na Vercel: framework **Vite**, comando `npm run build`, pasta `dist`.

## Onde preencher os dados

Tudo que a cliente ainda precisa informar está em **`src/data/conteudo.ts`**.
Enquanto um campo estiver como `[PREENCHER]`, ele aparece no site com fundo
amarelo. Não publique com nenhum amarelo na tela.

- Região atendida (também vai para o JSON-LD do Google)
- Horário de atendimento
- E-mail
- Domínio (usado no Open Graph e no endereço canônico)
- Anos de experiência
- As respostas das seis perguntas do acordeão

## Arquivos que faltam

Basta salvar o arquivo com o nome exato na pasta indicada. O placeholder some
sozinho.

**Logo** (`public/brand/`). Use somente os arquivos oficiais, nunca uma recriação:

- `opto-anaclaudia-logo.svg`: topo da página
- `opto-anaclaudia-logo-branco.svg`: rodapé, sobre fundo navy
- `opto-anaclaudia-simbolo.svg`: reservado
- `favicon.svg`: ícone da aba

**Fotos** (`public/img/`, WebP qualidade 80):

| Arquivo | Proporção | Onde |
|---|---|---|
| `hero-exame-casa.webp` | 4:5 | Hero |
| `maleta-armacoes.webp` | 3:2 | A maleta |
| `ana-claudia-retrato.webp` | 4:5 | Quem é a Ana Cláudia (foto real, não gerada) |
| `og-ana-claudia.jpg` | 1200×630, JPG | Card do link no WhatsApp |

Os prompts de geração estão em `PROMPTS-MIDIA-ANA-CLAUDIA.md`.

## Regra de copy

O site não pode usar termos de ato médico. Antes de publicar qualquer mudança
de texto, rode:

```bash
npm run build && npm run verificar-copy
```

O script procura cada termo vetado (com e sem acento) em `src`, `public`,
`index.html`, configurações e no `dist` gerado. A lista fica codificada dentro
do script, para que nem o repositório contenha esses termos.
