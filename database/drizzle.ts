import { neon } from '@neondatabase/serverless';
import config from '@/lib/config';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql });
