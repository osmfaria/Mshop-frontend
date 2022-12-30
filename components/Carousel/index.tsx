import {
  Fragment,
  ReactElement,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react'
import { PublicationProviderProp } from '../../interfaces/contextInterface'
import { Publication } from '../../interfaces/publicationsInterface'
import AuctionCard from '../Cards/AuctionCard'
import PublicationCard from '../Cards/PublicationCard'
import SkeletonCard from '../Cards/SkeletonCard'
import SlideButton from '../SlideButton'
import { useEffectAfterMount } from '@react-hooks-library/core'
import { Container } from './styles'

const Carousel = ({
  setLoading,
  getPublications,
  publications,
  loading,
  hasMore,
  innerRef,
  title,
  userId,
}: PublicationProviderProp): ReactElement => {
  const [pageNumber, setPageNumber] = useState(1)
  const scrollSection = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver>()

  useEffectAfterMount(() => {
    setLoading(true)
    if (title === 'Publications') getPublications(pageNumber, userId)
    else if (title !== 'Auction') getPublications(pageNumber)
  }, [pageNumber])

  const lastPublicationElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return <p>loading...</p>
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const slide = (shift: number, section: RefObject<HTMLDivElement>): void => {
    section.current!.scrollLeft += shift
  }

  return (
    <Container>
      <div className='products-display' ref={innerRef} id={title}>
        <h2>{title}</h2>
        <div className='carousel' id='cars' ref={scrollSection}>
          {publications.length === 0
            ? // Skeleton Cards - loading
              [...Array(11)].map((el, index) => (
                <SkeletonCard key={index} cardType={title} />
              ))
            : // Cards for data Fetched
              publications.map((publication: Publication, index: number) => {
                if (publications.length === index + 1) {
                  return (
                    <Fragment key={index}>
                      {title === 'Auction' ? (
                        <AuctionCard
                          innerRef={lastPublicationElementRef}
                          publication={publication}
                        />
                      ) : (
                        <PublicationCard
                          innerRef={lastPublicationElementRef}
                          publication={publication}
                        />
                      )}
                    </Fragment>
                  )
                } else {
                  return (
                    <Fragment key={index}>
                      {title === 'Auction' ? (
                        <AuctionCard publication={publication} />
                      ) : (
                        <PublicationCard publication={publication} />
                      )}
                    </Fragment>
                  )
                }
              })}
        </div>

        {publications.length === 0 || publications.length < 5 ? (
          <></>
        ) : (
          <>
            {' '}
            <SlideButton
              format='back'
              onClick={() => slide(-1800, scrollSection)}
            />
            <SlideButton
              format='forward'
              onClick={() => slide(1800, scrollSection)}
            />
          </>
        )}
      </div>
    </Container>
  )
}

export default Carousel
