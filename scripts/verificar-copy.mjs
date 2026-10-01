// Verifica se algum termo vetado pela regra de copy aparece no projeto.
// A lista fica codificada em base64 para que o próprio repositório nunca
// contenha os termos escritos por extenso.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const codificados = ["Y29uc3VsdGE=","Y29uc3VsdMOzcmlv","cGFjaWVudGU=","ZGlhZ27Ds3N0aWNv","ZGlhZ25vc3RpY2Fy","dHJhdGFtZW50bw==","dHJhdGFy","Y3VyYXI=","ZG9lbsOnYQ==","cGF0b2xvZ2lh","Y2F0YXJhdGE=","Z2xhdWNvbWE=","cHJlc2NyacOnw6NvIG3DqWRpY2E=","cmVjZWl0YSBtw6lkaWNh","RHJhLg=="]
const termos = codificados.map((t) => Buffer.from(t, 'base64').toString('utf8'))

const alvos = ['src', 'public', 'scripts', 'index.html', 'README.md', 'PROMPTS-MIDIA-ANA-CLAUDIA.md', 'vite.config.ts', 'tailwind.config.js', 'dist']
const extensoes = /\.(tsx?|jsx?|mjs|css|html|md|json|svg|txt|xml)$/i

// Sem acento e em minúsculas, para pegar também a grafia sem acento.
const normalizar = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function arquivos(caminho) {
  if (!existsSync(caminho)) return []
  if (statSync(caminho).isFile()) return extensoes.test(caminho) ? [caminho] : []
  return readdirSync(caminho).flatMap((nome) => arquivos(join(caminho, nome)))
}

const lista = alvos.flatMap(arquivos)
let total = 0
console.log(`Arquivos verificados: ${lista.length}\n`)

for (const termo of termos) {
  const ehTitulo = termo.endsWith('.') && termo[0] === termo[0].toUpperCase()
  const ocorrencias = []
  for (const arquivo of lista) {
    readFileSync(arquivo, 'utf8').split('\n').forEach((linha, i) => {
      const achou = ehTitulo
        ? new RegExp(`(^|[^\\p{L}])${termo.replace('.', '\\.')}`, 'u').test(linha)
        : normalizar(linha).includes(normalizar(termo))
      if (achou) ocorrencias.push(`    ${arquivo}:${i + 1}`)
    })
  }
  total += ocorrencias.length
  console.log(`${ocorrencias.length === 0 ? 'OK  ' : 'ERRO'}  "${termo}": ${ocorrencias.length} ocorrência(s)`)
  ocorrencias.forEach((o) => console.log(o))
}

console.log(total === 0 ? '\nNenhum termo vetado encontrado.' : `\n${total} ocorrência(s). Corrija antes de publicar.`)
process.exit(total === 0 ? 0 : 1)
