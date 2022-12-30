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
                <ul>Auction</ul>
              </Link>
              <Link href='/#Cars' onClick={handleHamburgerModal}>
                <ul>Cars</ul>
              </Link>
              <Link href='/#Motorcycle' onClick={handleHamburgerModal}>
                <ul>Motorcycle</ul>
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
                      <ul>Dashboard</ul>
                    </Link>
                    <Link href='/profile' onClick={handleHamburgerModal}>
                      <ul>Profile</ul>
                    </Link>
                    <Link href='/cart' onClick={handleHamburgerModal}>
                      <ul>Cart</ul>
                    </Link>
                    <Link
                      href='#'
                      onClick={() => signOut({ callbackUrl: '/' })}
                    >
                      <ul>Logout</ul>
                    </Link>
                  </div>
                </Collapsible>
              ) : (
                <>
                  <Link href='/login' onClick={handleHamburgerModal}>
                    <ul>Login</ul>
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
