import { ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CardProp } from '../../interfaces/cardInterface'
import { ContainerPublication, ContainerAuction } from './styles'

const SkeletonCard = ({ cardType }: CardProp): ReactElement => {
  return (
    <>
      {cardType === 'Auction' ? (
        <ContainerAuction>
          <Skeleton className='auction' />
        </ContainerAuction>
      ) : (
        <ContainerPublication>
          <Skeleton className='skeleton-image' />
          <h6>
            <Skeleton />
          </h6>
          <p className='description'>
            <Skeleton count={2} />
          </p>

          <div className='box-user'>
            <Skeleton circle={true} className='user-icon' />
            <p className='username'>
              <Skeleton />
            </p>
          </div>

          <div className='box-car_details'>
            <div className='box-highlight'>
              <Skeleton className='highlight' />
              <Skeleton className='highlight' />
            </div>
            <Skeleton className='price' />
          </div>
        </ContainerPublication>
      )}
    </>
  )
}

export default SkeletonCard
