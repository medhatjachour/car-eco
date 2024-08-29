import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema' 
const sql = neon("postgresql://car-eco_owner:mkW6OirKfdE9@ep-morning-bread-a2q9ogts.eu-central-1.aws.neon.tech/car-eco?sslmode=require");
export const db = drizzle(sql,{schema});