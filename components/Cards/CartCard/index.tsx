import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { getCurrency } from '../../../functions/currency'
import { Publication } from '../../../interfaces/publicationsInterface'
import { useCart } from '../../../providers/cart'
import UserIcon from '../../UserIcon'
import { Container } from './styles'

function CartCard({ item }: { item: Publication }) {
  const loader = () => item.Image[0].link
  const router = useRouter()
  const price = getCurrency(item.price)
  const { removeFromCart } = useCart()

  const handleClick = (): Promise<boolean> =>
    router.push(`/publications/${item.id}`)

  return (
    <Container>
      <div className='image-container' onClick={handleClick}>
        <Image
          loader={loader}
          src='main'
          alt='publication poster'
          fill
          className='image'
        />
      </div>

      <div className='details-container'>
        <h3 onClick={handleClick}>{item.title}</h3>

        <div
          className='box-user'
          onClick={() => router.push(`/publications/users/${item.userId}`)}
        >
          <UserIcon name={item.user.name} />
          <p className='username'>{item.user.name}</p>
        </div>

        <div className='box-car_details' onClick={handleClick}>
          <div>
            <span className='highlight'>{item.milieage} KM</span>
            <span className='highlight'>{item.year}</span>
          </div>
          <span className='price'>{price}</span>
        </div>
      </div>
      <div className='remove-btn' onClick={() => removeFromCart(item.id)}>
        Remove from cart
      </div>
    </Container>
  )
}

export default CartCard
