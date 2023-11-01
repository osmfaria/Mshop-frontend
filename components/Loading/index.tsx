import { Container } from './styles'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-loader-spinner'

const Loading = () => {
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
    router.events.on('routeChangeError', () => setLoading(false))

    return () => {
      router.events.off('routeChangeStart', () => setLoading(true))
      router.events.off('routeChangeComplete', () => setLoading(false))
      router.events.off('routeChangeError', () => setLoading(false))
    }
  }, [])

  return loading ? (
    <Container>
      <ProgressBar
        height='80'
        width='80'
        borderColor='#4529E6'
        barColor='#B0A6F0'
      />
    </Container>
  ) : null
}

export default Loading
