import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

export const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
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
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      try {
        const db = await connectDB();

        // Check if the user already exists in the database
        const existingUser = await db.collection("users").findOne({ email: user.email });

        if (!existingUser) {
          // Create a new user in the database
          const newUser = {
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider, // Store the provider (e.g., "google", "github")
            createdAt: new Date(),
          };

          await db.collection("users").insertOne(newUser);
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error.message);
        return false; // Prevent sign-in
      }
    },
    async session({ session, token }) {
      session.user.id = token.id; // Add user ID to the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the JWT token
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };