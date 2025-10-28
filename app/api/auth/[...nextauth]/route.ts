import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid email profile " +
            "https://www.googleapis.com/auth/user.birthday.read " +
            "https://www.googleapis.com/auth/user.addresses.read " +
            "https://www.googleapis.com/auth/user.phonenumbers.read " +
            "https://www.googleapis.com/auth/user.gender.read",
          prompt: "consent",
        },
      },
      async profile(profile, tokens) {
        // This runs after Google returns user data
        const accessToken = tokens.access_token;

        // Fetch additional user info from Google People API
        const res = await fetch(
          "https://people.googleapis.com/v1/people/me?personFields=genders,birthdays,addresses,phoneNumbers",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const data = await res.json();

        // Extract optional fields safely
        const gender = data?.genders?.[0]?.value || null;
        const phone = data?.phoneNumbers?.[0]?.value || null;
        const age = data?.birthdays?.[0]?.date?.year
          ? new Date().getFullYear() - data.birthdays[0].date.year
          : null;
        const location = data?.addresses?.[0]?.city || null;

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          phone,
          age,
          sex: gender,
          location,
          provider: "GOOGLE",
        };
      },
    }),

    // Email + Password login
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.password) return null;

        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) return null;

        return {
          id: user.id.toString(),
          name: user.username,
          email: user.email,
          provider: "CREDENTIALS",
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    // When a new session starts
    //@ts-ignore
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          // Create new user in Prisma
          await prisma.user.create({
            data: {
              username: user.name!,
              email: user.email!,
              //@ts-ignore
              provider: "GOOGLE",
              phone: user.phone || undefined,
              age: user.age || undefined,
              location: user.location || undefined,
              sex: user.sex || undefined,
            },
          });
        }
      }
      return true;
    },
//@ts-ignore
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.provider = user.provider;
      }
      return token;
    },
    //@ts-ignore
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.provider = token.provider;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
};
//@ts-ignore
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
