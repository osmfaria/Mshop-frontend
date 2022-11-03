import useSWR from 'swr'
import { IPublication } from '../interfaces/publicationsInterface'



const Home = () => {
  const fetcher = async (): Promise<IPublication> => {
    const response = await fetch(
      'https://motors-ecommerce-api.herokuapp.com/publications'
    )
    const data = await response.json()
    return data
  }

  const { data, error } = useSWR<IPublication, Error>(
    'publications',
    fetcher
  )
  if (error) console.log(error)

  if (!data) return <h1>Loading ...</h1>
  return (
    <>
      <h1>Home</h1>
      {!!data && <h2>{data.results[0].title}</h2>}
    </>
  )
}

export default Home
