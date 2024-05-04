import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
          SELECT * from students where email = ${credentials?.email}
          `;
        const user = response.rows[0];

        if (!user) {
          return null;
        }
        console.log(user);


        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        console.log({ passwordCorrect: passwordCorrect });

        if (passwordCorrect) {
          console.log({ user: user });
          let isAdmin = false
          if(user.email === '2041001037.faridahmed@gmail.com')isAdmin = true
          return { id: user.id, email: user.email, isAdmin: isAdmin };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
