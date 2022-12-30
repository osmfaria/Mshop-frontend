import { ReactElement, RefObject } from 'react'
import { Container } from '../styles/home'
import { useRef } from 'react'
import { usePublication } from '../providers/publications'
import Button from '../components/Button'
import Carousel from '../components/Carousel'

export default function Home(): ReactElement {
  const auctionSection = useRef<HTMLDivElement>(null)
  const carSection = useRef<HTMLDivElement>(null)
  const motorcycleSection = useRef<HTMLDivElement>(null)

  const handleClick = (ref: RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const {
    getPublicationsByCar,
    carPublications,
    setCarLoading,
    carLoading,
    carHasMore,
    getPublicationsByMotorcycle,
    motoPublications,
    setMotoLoading,
    motoLoading,
    motoHasMore,
  } = usePublication()

  return (
    <Container>
      <div className='banner'>
        <h1>Speed and experience in a place made for you</h1>
        <p>Explore the best options for you</p>
        <div className='btn-group'>
          <Button
            size='bg'
            design='outlineLight'
            onClick={() => handleClick(auctionSection)}
          >
            Auction
          </Button>
          <Button
            size='bg'
            design='outlineLight'
            onClick={() => handleClick(carSection)}
          >
            Cars
          </Button>
          <Button
            size='bg'
            design='outlineLight'
            onClick={() => handleClick(motorcycleSection)}
          >
            Bikes
          </Button>
        </div>
      </div>
      <div className='products-section' ref={auctionSection}>
        <Carousel
          setLoading={setCarLoading}
          getPublications={getPublicationsByCar}
          publications={carPublications}
          loading={carLoading}
          hasMore={carHasMore}
          innerRef={auctionSection}
          title='Auction'
        />
        <Carousel
          setLoading={setCarLoading}
          getPublications={getPublicationsByCar}
          publications={carPublications}
          loading={carLoading}
          hasMore={carHasMore}
          innerRef={carSection}
          title='Cars'
        />
        <Carousel
          setLoading={setMotoLoading}
          getPublications={getPublicationsByMotorcycle}
          publications={motoPublications}
          loading={motoLoading}
          hasMore={motoHasMore}
          innerRef={motorcycleSection}
          title='Motorcycle'
        />
      </div>
    </Container>
  )
}
