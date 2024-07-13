import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import UserModel from "./models/UserModel";
import connectBD from "./lib/connectDb";
import bcrypt from "bcrypt";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          await connectBD();
          const user = await UserModel.findOne({ email: credentials.email });
          if (!user) {
            return null;
          }
          const isValid = bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            return null;
          }
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
});
