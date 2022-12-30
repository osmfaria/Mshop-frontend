import { motorsApi } from '../../services/api'
import {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
  Redirect,
} from 'next'
import { SSRProps } from '../../interfaces/serverSideRenderingInterface'
import { Container } from '../../styles/publications'
import Image from 'next/image'
import { ReactElement, useState } from 'react'
import { getCurrency } from '../../functions/currency'
import Button from '../../components/Button'
import UserIcon from '../../components/UserIcon'
import CommentsCard from '../../components/Cards/CommentsCard'
import ModalGallery from '../../components/GalleryModal'
import { useModalController } from '../../providers/modalController'
import { useRouter } from 'next/router'
import { useCart } from '../../providers/cart'

const PublicationPost = ({
  publication,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
  const loader = () => publication.Image[0].link
  const price = getCurrency(publication.price)
  const [currentImage, setCurrentImage] = useState<string>('')

  const { handleGalleryModal } = useModalController()

  const handleClick = (imageLink: string): void => {
    setCurrentImage(imageLink)
    handleGalleryModal()
  }

  const router = useRouter()
  const { addToCart } = useCart()

  return (
    <Container>
      <ModalGallery imageLink={currentImage} />
      <div className='top-section'></div>

      <div className='content-main'>
        <div className='content-publication'>
          <div className='publication-main'>
            <div className='box-image'>
              <Image
                loader={loader}
                src='main'
                alt='publication poster'
                fill
                className='image'
                sizes='(max-width: 450px)'
              />
            </div>

            <div className='cards details'>
              <h6>{publication.title}</h6>

              <div className='box-car_details'>
                <div>
                  <span className='highlight'>{publication.milieage} KM</span>
                  <span className='highlight'>{publication.year}</span>
                </div>
                <span className='price'>{price}</span>
              </div>

              <Button design='brand1' size='bg' onClick={() => addToCart(publication)}>
                Add to cart
              </Button>
            </div>

            <div className='cards description'>
              <h6>Description</h6>
              <p>{publication.description}</p>
            </div>
          </div>

          <aside className='publication-aside'>
            <div className='gallery'>
              <h6>Gallery</h6>
              <div className='gallery-card'>
                {publication.Image.map((_, index) => (
                  <Image
                    priority
                    key={index}
                    loader={() => publication.Image[index].link}
                    src='gallery'
                    alt='publication poster'
                    height={108}
                    width={108}
                    className='gallery-image'
                    onClick={() => handleClick(publication.Image[index].link)}
                  />
                ))}
              </div>
            </div>
            <div className='user-content'>
              <UserIcon size='bg' name={publication.user.name} />
              <h6>{publication.user.name}</h6>
              <p>{publication.user.description}</p>
              <Button
                design='grey1'
                size='bg'
                onClick={() =>
                  router.push(`/publications/users/${publication.userId}`)
                }
              >
                Check publications
              </Button>
            </div>
          </aside>
        </div>

        <div className='content-comments'>
          <CommentsCard publicationId={publication.id} />
        </div>
      </div>
    </Container>
  )
}

export default PublicationPost

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<SSRProps | { redirect: Redirect }> => {
  const id = context.params?.id
  const data = await motorsApi
    .get(`/publications/${id}`)
    .then((res) => res.data)

  if (!data.is_active) {
    return {
      redirect: {
        permanent: false,
        destination: '/opss',
      },
    }
  }

  return {
    props: {
      publication: data,
    },
  }
}
