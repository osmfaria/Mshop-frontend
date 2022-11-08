import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import {AuthProvider} from "../Context/AuthContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { UserProvider } from '../Context/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      
      <AuthProvider>
      <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
      <ToastContainer/>
      </AuthProvider>
      
    </ThemeProvider>
  )
}
