//Contain async functions for fetching data from postgres
// sql queries like getUsers,

import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

// Add noStore() at the top of every fetchFunction to prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
// Usually when you are querying a lot of data and you don't want it to be cached

export async function getUser(email: string) {
    try {
      const user = await sql`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0] as User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }