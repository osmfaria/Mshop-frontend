import { ReactElement } from 'react'
import { Container } from './styles'
import { IoIosArrowUp } from 'react-icons/io'
import Image from 'next/image'

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Container>
      <h3>
        <Image src='/logo-white.svg' alt='logo' height={26.34} width={153.02} />
      </h3>
      <p>&#xa9; {currentYear} - Made with by ❤️ Osmar</p>
      <button onClick={scrollToTop}>
        <IoIosArrowUp size={20} />
      </button>
    </Container>
  )
}

export default Footer
