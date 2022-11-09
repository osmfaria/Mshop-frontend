import { ReactNode } from 'react'
import { PublicationProvider } from './publications'

interface ProviderProps {
  children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return <PublicationProvider>{children}</PublicationProvider>
}

export default Providers
