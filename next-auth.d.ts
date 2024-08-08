import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      role?: string | null;
    } & DefaultSession['user'];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    id?: string | null;
    token?: string;
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    accessToken?: string;
    role?: string;
  }
}
