import { ReactElement } from 'react'
import { CardProp } from '../../interfaces/publicationsInterface'
import { Container } from './styles'
import Image from 'next/image'
import UserIcon from '../UserIcon'
import { getCurrency } from '../../functions/currency'

const PublicationCard = ({ publication, innerRef }: CardProp): ReactElement => {
  const loader = () => publication.Image[0].link
  
  const price = getCurrency(publication.price)

  return (
    <Container ref={innerRef}>
      <Image
        loader={loader}
        src='teste'
        alt='publication poster'
        className='image'
        fill
        sizes='312px'
        loading='lazy'
      />
      <h6>{publication.title}</h6>
      <p className='description'>{publication.description}</p>

      <div className='box-user'>
        <UserIcon name={publication.user.name} />
        <p className='username'>{publication.user.name}</p>
      </div>

      <div className='box-car_details'>
        <div>
          <span className='highlight'>{publication.milieage} KM</span>
          <span className='highlight'>{publication.year}</span>
        </div>
        <span className='price'>{price}</span>
      </div>
    </Container>
  )
}

export default PublicationCard
