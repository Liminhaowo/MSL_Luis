import './styles/global.css'
import './styles/theme.css'
import {Heading} from './components/Heading'
import {Container} from './components/Container'

export function App() {
  return (
    <>
      <Container>
        <Heading>Cronômetro</Heading>
      </Container>
      <Container >
        <Heading>00:00:00</Heading>
      </Container>
    </>
  )
}


