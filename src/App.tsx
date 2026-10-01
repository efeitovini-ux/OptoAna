import { ComoFunciona } from './components/ComoFunciona'
import { Hero } from './components/Hero'
import { ParaQuemE } from './components/ParaQuemE'
import { Servicos } from './components/Servicos'

export default function App() {
  return (
    <main id="conteudo">
      <Hero />
      <ParaQuemE />
      <Servicos />
      <ComoFunciona />
    </main>
  )
}
