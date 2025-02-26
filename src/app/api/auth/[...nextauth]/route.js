import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

export const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const db = await connectDB();
          const user = await db.collection("users").findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found.");
          }

          if (!bcrypt.compareSync(credentials.password, user.password)) {
            throw new Error("Invalid password.");
          }

          return { id: user._id, email: user.email, name: user.name };
        } catch (error) {
          console.error("Authentication error:", error.message);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.id; // Add user ID to the session
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id; // Add user ID to the JWT token
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };