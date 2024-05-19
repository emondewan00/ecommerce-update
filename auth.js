import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import UserModel from "./models/UserModel";
import connectBD from "./lib/connectDB";
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
          console.log(user, "user");
          if (!user) {
            return null;
          }
          const isValid = bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            return null;
          }
          return {
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
});
