import { ReactNode } from 'react'
import { PublicationProvider } from './publications'
import { ModalControllerProvider } from './modalController'
import { CommentProvider } from './comments'
import { CartProvider } from './cart'

interface ProviderProps {
  children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <PublicationProvider>
      <ModalControllerProvider>
        <CartProvider>
          <CommentProvider>{children}</CommentProvider>
        </CartProvider>
      </ModalControllerProvider>
    </PublicationProvider>
  )
}

export default Providers
