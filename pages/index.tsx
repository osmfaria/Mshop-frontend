import { ReactElement, RefObject } from 'react'
import AuctionCard from '../components/AuctionCard'
import Button from '../components/Button'
import { Container } from '../styles/home'
import { useRef } from 'react'
import { usePublication } from '../providers/publications'
import Carousel from '../components/Carousel'

export default function Home(): ReactElement {
  const auctionSection = useRef<HTMLDivElement>(null)
  const carSection = useRef<HTMLDivElement>(null)
  const motorcycleSection = useRef<HTMLDivElement>(null)

  const onCarButtonClick = (ref: RefObject<HTMLDivElement>) => {
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
            onClick={() => onCarButtonClick(auctionSection)}
          >
            Auction
          </Button>
          <Button
            size='bg'
            design='outlineLight'
            onClick={() => onCarButtonClick(carSection)}
          >
            Cars
          </Button>
          <Button
            size='bg'
            design='outlineLight'
            onClick={() => onCarButtonClick(motorcycleSection)}
          >
            Bikes
          </Button>
        </div>
      </div>
      <div className='products-section' ref={auctionSection}>
        {/* <div className='products-display'>
          <h2>Auction</h2>
          <div className='carousel'>
            {carPublications.map((publication, index) => (
              <AuctionCard key={index} publication={publication} />
            ))}
          </div>
        </div> */}
        <Carousel
          setLoading={setCarLoading}
          getPublications={getPublicationsByCar}
          publications={carPublications}
          loading={carLoading}
          hasMore={carHasMore}
          innerRef={carSection}
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
