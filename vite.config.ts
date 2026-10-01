import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { conteudo, pendente } from './src/data/conteudo'

// Injeta no index.html os dados que vêm de src/data/conteudo.ts (JSON-LD e
// endereço do site), para que a cliente preencha tudo em um lugar só.
function seoDoConteudo(): Plugin {
  const temDominio = !pendente(conteudo.dominio)
  const urlSite = temDominio ? `https://${conteudo.dominio}/` : '/'
  const imagemOg = temDominio
    ? `https://${conteudo.dominio}/img/og-ana-claudia.jpg`
    : '/img/og-ana-claudia.jpg'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: conteudo.marca,
    description:
      'Optometrista a domicílio. Exame de refração, lentes de contato, óculos e treinamento visual, na sua casa.',
    telephone: conteudo.whatsapp.telefoneInternacional,
    areaServed: conteudo.regiaoAtendida,
    url: urlSite,
    image: imagemOg,
    sameAs: [conteudo.instagram.link],
  }

  return {
    name: 'seo-do-conteudo',
    transformIndexHtml(html) {
      return html
        .replace('__JSON_LD__', JSON.stringify(jsonLd, null, 2))
        .replaceAll('__URL_SITE__', urlSite)
        .replaceAll('__IMAGEM_OG__', imagemOg)
    },
  }
}

export default defineConfig({
  plugins: [react(), seoDoConteudo()],
})
