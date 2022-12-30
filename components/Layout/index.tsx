import { ChildrenProp } from '../../interfaces/layoutInterface'
import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styles'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
