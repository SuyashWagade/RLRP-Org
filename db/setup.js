import fs from 'fs';
import path from 'path';
import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../backend/.env') });

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || `postgres://${process.env.PGUSER || 'postgres'}:${process.env.PGPASSWORD || 'postgres'}@${process.env.PGHOST || 'localhost'}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE || 'rlrp_db'}`;

const pool = new Pool({ connectionString });

async function initDB() {
  console.log('Initializing PostgreSQL database schema & seeds...');
  try {
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');

    await pool.query(schemaSql);
    console.log('✔ Schema applied successfully.');

    await pool.query(seedSql);
    console.log('✔ Seed data populated successfully.');

    console.log('Database initialization complete!');
  } catch (err) {
    console.error('Error setting up PostgreSQL database:', err.message);
  } finally {
    await pool.end();
  }
}

initDB();
