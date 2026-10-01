import { ComoFunciona } from './components/ComoFunciona'
import { Hero } from './components/Hero'
import { Maleta } from './components/Maleta'
import { ParaQuemE } from './components/ParaQuemE'
import { QuemE } from './components/QuemE'
import { Servicos } from './components/Servicos'

export default function App() {
  return (
    <main id="conteudo">
      <Hero />
      <ParaQuemE />
      <Servicos />
      <ComoFunciona />
      <Maleta />
      <QuemE />
    </main>
  )
}
