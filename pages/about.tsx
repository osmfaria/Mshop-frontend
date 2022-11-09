import { ReactElement } from 'react'
import AuctionCard from '../components/AuctionCard'
import Footer from '../components/Footer'
import PublicationCard from '../components/PublicationCard'
import { PublicationProp } from '../interfaces/publicationsInterface'

export async function getServerSideProps(): Promise<{
  props: PublicationProp
}> {
  const response = await fetch(
    'https://motors-ecommerce-api.herokuapp.com/publications'
  )
  const data = await response.json()
  
  console.log(data.results[0])
  return {
    props: {
      publications: data,
    },
  }
}

const About = ({ publications }: PublicationProp): ReactElement => {
  return (
    <>
      {publications.results.map((publication) => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </>
  )
}

export default About
