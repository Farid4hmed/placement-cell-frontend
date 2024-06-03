import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const authOptions: AuthOptions = {
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await sql`
          SELECT * FROM students WHERE email = ${credentials?.email}
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
          const registration_number = user.email.split('.')[0]
          console.log('reg', registration_number)
          const response = await sql`
          SELECT * FROM collegeStudentDetails WHERE registration_number = ${registration_number}
        `;
          const userData = response.rows[0]

          console.log({ user: user });
          let isAdmin = false;
          if (user.email === '2041001037.faridahmed@gmail.com') isAdmin = true;
          return { id: user.id, email: user.email, isAdmin: isAdmin, name: userData.name, registration: userData.registration_number, branch: userData.branch, batch: userData.batch, section: userData.section, cgpa: userData.cgpa, phone: userData.phone };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.isAdmin = user.isAdmin;
        token.name = user.name;
        token.registration = user.registration;
        token.branch = user.branch;
        token.batch = user.batch;
        token.section = user.section;
        token.cgpa = user.cgpa;
        token.phone = user.phone;
      }
      console.log("JWT Callback - Token:", token);
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
        session.name = token.name;
        session.registration = token.registration;
        session.branch = token.branch;
        session.batch = token.batch;
        session.section = token.section;
        session.cgpa = token.cgpa;
        session.phone = token.phone;
      }
      console.log("Session Callback - Session:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export { authOptions };
