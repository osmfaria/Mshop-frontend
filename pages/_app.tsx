import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../components/Layout'
import Providers from '../providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Providers>
            <Component {...pageProps} />
            <ToastContainer/>
          </Providers>
        </Layout>
    </ThemeProvider>
  )
}
