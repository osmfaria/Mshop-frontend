import { DropDown, Container } from './styles'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'
import UserIcon from '../../UserIcon'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

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
                Dashboard
              </Link>
              <Link href='/profile' onClick={handleClick}>
                Profile
              </Link>
              <Link href='/cart' onClick={handleClick}>
                Cart
              </Link>
              <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
                Logout
              </Link>
            </nav>
          </DropDown>
        )}
      </OutsideClickHandler>
    </Container>
  )
}

export default Menu
