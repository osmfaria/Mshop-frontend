import { ReactNode } from 'react'
import { ChildrenProp } from '../../interfaces/layoutInterface'
import Footer from '../Footer'
import { Container } from './styles'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
