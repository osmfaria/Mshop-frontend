import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import {AuthProvider} from "../Context/AuthContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      
      <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer/>
      </AuthProvider>
      
    </ThemeProvider>
  )
}
