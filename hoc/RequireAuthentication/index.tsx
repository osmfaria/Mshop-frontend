import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export function RequireAuthentication(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    
    const token = nookies.get(ctx)

    if (
      !token['__Secure-next-auth.session-token'] &&
      !token['next-auth.session-token']
    ) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      }
    }

    return await gssp(ctx)
  }
}
