import { ReactElement } from 'react'
import { CardProp } from '../../interfaces/publicationsInterface'
import { Container } from './styles'
import { BsArrowRight } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import UserIcon from '../UserIcon'
import { getCurrency } from '../../functions/currency'

const AuctionCard = ({ publication, innerRef }: CardProp): ReactElement => {
  const price = getCurrency(publication.price)

  return (
    <Container image={publication.Image[0].link} ref={innerRef}>
      <div className='box-cover'>
        <div className='box-clock'>
          <FiClock size={20} />
          <span className='clock-time'>01:58:00</span>
        </div>

        <section className='box-card_details'>
          <h6>{publication.title}</h6>
          <p className='description'>{publication.description}</p>
          <div className='box-user'>
            <UserIcon name={publication.user.name} />
            <p className='username'>{publication.user.name}</p>
          </div>
          <div className='box-car_details'>
            <div>
              <span className='highlight'>{publication.year}</span>
              <span className='highlight'>{publication.milieage} KM</span>
            </div>
            <span className='price'>{price}</span>
          </div>
        </section>
      </div>

      <div className='box-link'>
        <button>Go to auction</button>
        <button>
          <BsArrowRight size={30} />
        </button>
      </div>
    </Container>
  )
}

export default AuctionCard
