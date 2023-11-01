import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'
import Providers from '../providers'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from 'next-auth/react'
import Loading from '../components/Loading'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Providers>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer />
          </Providers>
        </SessionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
