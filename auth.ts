import NextAuth from 'next-auth'
import authConfig from './lib/auth/auth.config'

declare module 'next-auth' {
  interface User {
    accessToken?: string
    refreshToken?: string
    user: {
      image?: string
      fullName?: string
      email?: string
    }
  }
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    picture?: string
    name?: string
    email?: string
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken
        token.picture = user?.user?.image
        token.name = user?.user?.fullName
        token.email = user?.user?.email
      }

      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string
      session.picture = token.picture as string
      session.name = token.name as string
      session.email = token.email as string

      return session
    },
  },
  ...authConfig,
})
