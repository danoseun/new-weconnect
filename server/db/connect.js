import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create an instance of Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// When connected to the database
pool.on('connect', () => {
  console.log('connected to the db');
});

// When the connection is done
pool.on('remove', () => {
  console.log('connection closed');
  // process.exit(0);
});

export default pool;
