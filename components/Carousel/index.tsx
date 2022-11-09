import {
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { PublicationProviderProp } from '../../interfaces/contextInterface'
import { Publication } from '../../interfaces/publicationsInterface'
import PublicationCard from '../PublicationCard'
import SlideButton from '../SlideButton'

const Carousel = ({
  setLoading,
  getPublications,
  publications,
  loading,
  hasMore,
  innerRef,
  title
}: PublicationProviderProp): ReactElement => {
  const [pageNumber, setPageNumber] = useState(1)
  const scrollSection = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    setLoading(true)
    getPublications(pageNumber)
  }, [pageNumber])

  const lastPublicationElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
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
    <div className='products-display' ref={innerRef}>
      <h2>{title}</h2>
      <div className='carousel' id='cars' ref={scrollSection}>
        {publications.map((publication: Publication, index: number) => {
          if (publications.length === index + 1) {
            return (
              <PublicationCard
                innerRef={lastPublicationElementRef}
                key={publication.id}
                publication={publication}
              />
            )
          } else {
            return <PublicationCard key={index} publication={publication} />
          }
        })}
      </div>
      <SlideButton format='back' onClick={() => slide(-1800, scrollSection)} />
      <SlideButton
        format='forward'
        onClick={() => slide(1800, scrollSection)}
      />
    </div>
  )
}

export default Carousel
