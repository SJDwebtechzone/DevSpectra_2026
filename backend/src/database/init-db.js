const { Client } = require('pg');
require('dotenv').config();

async function init() {
  const client = new Client({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'root3',
    database: process.env.DATABASE_NAME || 'devspectra',
  });

  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS contact_fields (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      label character varying NOT NULL,
      name character varying NOT NULL,
      type character varying NOT NULL DEFAULT 'text',
      placeholder character varying,
      options json,
      "isRequired" boolean NOT NULL DEFAULT true,
      "halfWidth" boolean NOT NULL DEFAULT false,
      "order" integer NOT NULL DEFAULT 1,
      "isActive" boolean NOT NULL DEFAULT true,
      "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS office_locations (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name character varying NOT NULL,
      city character varying NOT NULL,
      address text NOT NULL,
      phone character varying,
      hours character varying,
      status character varying NOT NULL DEFAULT 'Open Now',
      "embedUrl" text NOT NULL,
      "directUrl" text,
      "isPrimary" boolean NOT NULL DEFAULT false,
      "order" integer NOT NULL DEFAULT 1,
      "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Database tables successfully verified/created!');
  await client.end();
}

init().catch(console.error);
