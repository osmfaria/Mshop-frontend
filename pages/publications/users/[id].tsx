import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import UserCard from '../../../components/Cards/UserCard'
import Carousel from '../../../components/Carousel'
import {
  UserProps,
  UserSSRProps,
} from '../../../interfaces/serverSideRenderingInterface'
import { usePublication } from '../../../providers/publications'
import { motorsApi } from '../../../services/api'
import { Container } from '../../../styles/userPublication'

const UserPublicationsPost = ({ user }: UserProps): ReactElement => {
  const router = useRouter()
  const { id: userId } = router.query

  const {
    getPublicationsByUser,
    userPublications,
    setUserPublicationsLoading,
    userPublicationsLoading,
    userPublicationsHasMore,
  } = usePublication()

  return (
    <Container>
      <div className='top-section'></div>
      <div className='content-main'>
        <UserCard user={user} />

        <div className='products-section'>
          {!!userId && (
            <Carousel
              setLoading={setUserPublicationsLoading}
              getPublications={getPublicationsByUser}
              publications={userPublications}
              loading={userPublicationsLoading}
              hasMore={userPublicationsHasMore}
              title='Publications'
              userId={userId}
            />
          )}
        </div>
      </div>
    </Container>
  )
}

export default UserPublicationsPost

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<UserSSRProps> => {
  const id = context.params?.id
  const data = await motorsApi
    .get(`/users/general/${id}`)
    .then((res) => res.data)

  return {
    props: {
      user: data,
    },
  }
}

