import Link from 'next/link'
import { Container } from './styles'
import Menu from './MobileMenu'
import UserMenu from './UserMenu'
import Button from '../Button'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <Container>
      <Link href='/'>
        <h1 className='brand-name'>
          Motors <span>shop</span>
        </h1>
      </Link>
      <Menu />
      <nav>
        <Link href='/#Cars'>Cars</Link>
        <Link href='/#Motorcycle'>Motorcycles</Link>
        <Link href='/#Auction'>Auction</Link>
        <div className='nav-section-end'></div>

        {!!session ? (
          <UserMenu />
        ) : (
          <>
            <Link href='/login'>Login</Link>
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
