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

## Arquivos de mídia

O site mostra uma caixa com o nome do arquivo sempre que algum estiver
faltando. Basta salvar o arquivo com o nome exato.

**Logo** (`public/brand/`, PNG com fundo transparente): `opto-anaclaudia-logo.png`
(topo), `opto-anaclaudia-logo-branco.png` (rodapé), `opto-anaclaudia-simbolo.png`,
`favicon-32.png`, `apple-touch-icon.png`, `icone-512.png` e `public/favicon.ico`.
Use somente os arquivos oficiais, nunca uma recriação.

**Fotos** (`public/img/`, WebP qualidade 80):

| Arquivo | Proporção | Onde | Situação |
|---|---|---|---|
| `hero-exame-casa.webp` | 3:4 | Hero | ok |
| `crianca-exame.webp` | 4:3 | Para quem é | ok |
| `maleta-armacoes.webp` | 4:3 | A maleta (capa do vídeo) | ok |
| `entrega-oculos-poster.webp` | 16:9 | Como funciona (capa do vídeo) | ok |
| `og-ana-claudia.jpg` | 1200×630, JPG | Card do link no WhatsApp | ok |
| `ana-claudia-retrato.webp` | 3:4 | Quem é a Ana Cláudia (foto real, não gerada) | **falta** |

**Vídeos** (`public/video/`, sem som, cada um em `.webm` e `.mp4`):
`maleta-armacoes` (A maleta) e `entrega-oculos` (Como funciona). Tocam só
enquanto estão na tela, têm botão de pausa e viram foto para quem pediu menos
movimento.

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
