import { DropDown, Container } from './styles'
import { useModalController } from '../../../providers/modalController'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'
import Hamburger from 'hamburger-react'
import Button from '../../Button'
import Collapsible from 'react-collapsible'
import { signOut, useSession } from 'next-auth/react'
import CollapseMenu from '../CollapseUserMenu'
import { useRouter } from 'next/router'

const Menu = () => {
  const { isHamburgerOpen, handleHamburgerModal, setIsHamburgerOpen } =
    useModalController()

  const { data: session } = useSession()
  const router = useRouter()

  const handleButtonClick = (): void => {
    handleHamburgerModal()
    router.push('/register')
  }

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (isHamburgerOpen) setIsHamburgerOpen(false)
        }}
      >
        <Hamburger
          size={25}
          toggled={isHamburgerOpen}
          toggle={handleHamburgerModal}
        />
        {isHamburgerOpen && (
          <DropDown>
            <nav className='upper-panel'>
              <Link href='/#Auction' onClick={handleHamburgerModal}>
                Auction
              </Link>
              <Link href='/#Cars' onClick={handleHamburgerModal}>
                Cars
              </Link>
              <Link href='/#Motorcycle' onClick={handleHamburgerModal}>
                Motorcycle
              </Link>
            </nav>
            <nav className='lower-panel'>
              {!!session ? (
                <Collapsible
                  trigger={<CollapseMenu name={session.user!.name} />}
                  triggerWhenOpen={
                    <CollapseMenu name={session.user!.name} open />
                  }
                  transitionTime={200}
                >
                  <div className='collapsible'>
                    <Link href='/dashboard' onClick={handleHamburgerModal}>
                      Dashboard
                    </Link>
                    <Link href='/profile' onClick={handleHamburgerModal}>
                      Profile
                    </Link>
                    <Link href='/cart' onClick={handleHamburgerModal}>
                      Cart
                    </Link>
                    <Link
                      href='#'
                      onClick={() => signOut({ callbackUrl: '/' })}
                    >
                      Logout
                    </Link>
                  </div>
                </Collapsible>
              ) : (
                <>
                  <Link href='/login' onClick={handleHamburgerModal}>
                    Login
                  </Link>
                  <Button
                    size='bg'
                    design='outline2'
                    onClick={handleButtonClick}
                  >
                    Register
                  </Button>
                </>
              )}
            </nav>
          </DropDown>
        )}
      </OutsideClickHandler>
    </Container>
  )
}

export default Menu
