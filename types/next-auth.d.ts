import NextAuth, { DefaultSession, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string
      accessToken: string
    } & DefaultSession['user']
  }

  interface User {
    token: string
    & User
  } 

}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface DefaultJWT {
    /** OpenID ID Token */
    name: string
    accessToken: string
    userId: string
  }
}