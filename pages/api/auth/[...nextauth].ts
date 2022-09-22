import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "TEAMDAO Account",
            async authorize(credentials, req) {
                
            }
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 15 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    callbacks: {
        async session({ session, user, token }) {
            if (session) {
                session.user.id = token.sub
            }
            return session
        }
    },
    pages: {
        signIn: '/auth'
    },
    debug: true
})