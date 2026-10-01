import { ComoFunciona } from './components/ComoFunciona'
import { Contato } from './components/Contato'
import { Duvidas } from './components/Duvidas'
import { Hero } from './components/Hero'
import { Maleta } from './components/Maleta'
import { ParaQuemE } from './components/ParaQuemE'
import { QuemE } from './components/QuemE'
import { Rodape } from './components/Rodape'
import { Servicos } from './components/Servicos'
import { WhatsAppFlutuante } from './components/WhatsAppFlutuante'

export default function App() {
  return (
    <>
      <main id="conteudo">
        <Hero />
        <ParaQuemE />
        <Servicos />
        <ComoFunciona />
        <Maleta />
        <QuemE />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  )
}
