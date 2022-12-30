import { DropDown, Container } from './styles'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'
import UserIcon from '../../UserIcon'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (isOpen) setIsOpen(false)
        }}
      >
        <div className='nav-user' onClick={handleClick}>
          <UserIcon name={session!.user!.name} />
          <span className='nav-user-title'>{session!.user!.name}</span>
        </div>
        {isOpen && (
          <DropDown>
            <nav className='panel'>
              <Link href='/dashboard' onClick={handleClick}>
                <ul>Dashboard</ul>
              </Link>
              <Link href='/profile' onClick={handleClick}>
                <ul>Profile</ul>
              </Link>
              <Link href='/cart' onClick={handleClick}>
                <ul>Cart</ul>
              </Link>
              <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
                <ul>Logout</ul>
              </Link>
            </nav>
          </DropDown>
        )}
      </OutsideClickHandler>
    </Container>
  )
}

export default Menu
