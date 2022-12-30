import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { ReactElement } from 'react'
import UserCard from '../components/Cards/UserCard'
import Carousel from '../components/Carousel'
import { RequireAuthentication } from '../hoc/RequireAuthentication'
import { UserProfileProp } from '../interfaces/userInterface'
import { usePublication } from '../providers/publications'
import { motorsApi } from '../services/api'
import { Container } from '../styles/userPublication'

const Dashboard = ({ user }: UserProfileProp): ReactElement => {
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
        <UserCard user={user} profile />

        <div className='products-section'>
          <Carousel
            setLoading={setUserPublicationsLoading}
            getPublications={getPublicationsByUser}
            publications={userPublications}
            loading={userPublicationsLoading}
            hasMore={userPublicationsHasMore}
            title='Publications'
            userId={user.id}
          />
        </div>
      </div>
    </Container>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = RequireAuthentication(
  async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx)

    const user = await motorsApi
      .get(`/users/${session!.user.id}`, {
        headers: { Authorization: `Bearer ${session!.user.accessToken}` },
      })
      .then((res) => res.data)

    return {
      props: { user },
    }
  }
)
