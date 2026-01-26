import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ⚡ Change these to your own strong admin credentials
        const adminUser = {
          username: "admin",
          password: "StrongPass123",
        };

        if (
          credentials.username === adminUser.username &&
          credentials.password === adminUser.password
        ) {
          return { name: "Admin" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
});
