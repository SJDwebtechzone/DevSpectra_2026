const bcrypt = require('bcrypt');
const { Client } = require('pg');

async function main() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'devspectra',
    password: 'postgres',
    port: 5432,
  });

  await client.connect();
  const hashedPassword = await bcrypt.hash('Devspectra@123', 10);
  
  await client.query(
    `INSERT INTO users (name, email, password, role, is_active) 
     VALUES ('Super Admin', 'admin@devspectra.com', $1, 'SUPER_ADMIN', true)
     ON CONFLICT (email) 
     DO UPDATE SET password = $1, role = 'SUPER_ADMIN', is_active = true`,
    [hashedPassword]
  );

  console.log('SUCCESS: Admin credentials set to admin@devspectra.com / Devspectra@123');
  await client.end();
}

main().catch((err) => {
  console.error('ERROR:', err);
  process.exit(1);
});
