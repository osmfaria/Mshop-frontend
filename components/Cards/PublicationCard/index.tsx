import { ReactElement } from 'react'
import { CardProp } from '../../../interfaces/publicationsInterface'
import { Container } from './styles'
import Image from 'next/image'
import UserIcon from '../../UserIcon'
import { getCurrency } from '../../../functions/currency'
import { useRouter } from 'next/router'
import Button from '../../Button'

const PublicationCard = ({ publication, innerRef }: CardProp): ReactElement => {
  const loader = () => publication.Image[0].link
  const router = useRouter()
  const isUserPublication = router.pathname.includes('users')
  const isProfile = router.pathname.includes('dashboard')
  const price = getCurrency(publication.price)

  const handleClick = (): Promise<boolean> =>
    router.push(`/publications/${publication.id}`)

  const handleEdit = (): Promise<boolean> =>
    router.push(`/publications/edit/${publication.id}`)

  return (
    <Container ref={innerRef}>
      <Image
        loader={loader}
        src='teste'
        alt='publication poster'
        className='image'
        height={152}
        width={312}
        sizes='312px'
        loading='lazy'
        onClick={handleClick}
      />
      {isUserPublication &&
        (publication.is_active ? (
          <span className='status status--active'>Active</span>
        ) : (
          <span className='status status--inactive'>Inactive</span>
        ))}

      <h6 onClick={handleClick}>{publication.title}</h6>
      <p className='description'>{publication.description}</p>

      <div
        className='box-user'
        onClick={() => router.push(`/publications/users/${publication.userId}`)}
      >
        <UserIcon name={publication.user.name} />
        <p className='username'>{publication.user.name}</p>
      </div>

      <div className='box-car_details' onClick={handleClick}>
        <div>
          <span className='highlight'>{publication.milieage} KM</span>
          <span className='highlight'>{publication.year}</span>
        </div>
        <span className='price'>{price}</span>
      </div>

      {isProfile && (
        <Button size='md' design='outline1' onClick={handleEdit}>
          Edit
        </Button>
      )}
    </Container>
  )
}

export default PublicationCard
