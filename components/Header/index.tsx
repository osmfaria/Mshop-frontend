import Link from 'next/link'
import { Container } from './styles'
import Menu from './MobileMenu'
import UserMenu from './UserMenu'
import Button from '../Button'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Header = () => {
  const router = useRouter()
  const {data: session} = useSession()

  return (
    <Container>
      <Link href='/'>
        <h1 className='brand-name'>
          Motors <span>shop</span>
        </h1>
      </Link>
      <Menu />
      <nav>
        <Link href='/#Cars'>
          <ul>Cars</ul>
        </Link>
        <Link href='/#Motorcycle'>
          <ul>Motorcycles</ul>
        </Link>
        <Link href='/#Auction'>
          <ul>Auction</ul>
        </Link>
        <ul className='nav-section-end'></ul>

        {!!session ? (
          <UserMenu />
        ) : (
          <>
            <Link href='/login'>
              <ul>Login</ul>
            </Link>
            <Button
              size='md'
              design='outline2'
              onClick={() => router.push('/register')}
            >
              Register
            </Button>
          </>
        )}
      </nav>
    </Container>
  )
}

export default Header
