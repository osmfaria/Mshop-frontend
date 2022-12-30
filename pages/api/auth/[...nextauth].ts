import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        try {
          const user = await axios
            .post(
              'https://motors-ecommerce-api.herokuapp.com/login',
              credentials
            )
            .then((res) => res.data)
            .catch((err) => null)
          if (user) {
            return user
          }
          return null
        } catch (e: any) {
          return null
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          userId: user.id,
          name: user.name,
        }
      }

      return token
    },

    async session({ session, token }) {
      session.user.id = token.userId
      session.user.accessToken = token.accessToken
      session.user.name = token.name
      return session
    },
  },
})
