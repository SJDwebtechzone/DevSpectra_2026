const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'devspectra',
});

async function exportDatabase() {
  try {
    await client.connect();
    console.log('Successfully connected to PostgreSQL database.');

    let sqlDump = `-- DevSpectra Database Backup Export\n`;
    sqlDump += `-- Exported on: ${new Date().toISOString()}\n\n`;
    sqlDump += `CREATE DATABASE devspectra;\n\\c devspectra;\n\n`;

    // Fetch all public tables
    const tablesRes = await client.query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;`
    );

    const tables = tablesRes.rows.map((r) => r.table_name);
    console.log('Tables found:', tables);

    for (const table of tables) {
      sqlDump += `-- --------------------------------------------------------\n`;
      sqlDump += `-- Table structure and data for table \`${table}\`\n`;
      sqlDump += `-- --------------------------------------------------------\n\n`;

      // Fetch column definitions
      const colRes = await client.query(
        `SELECT column_name, data_type, is_nullable, column_default 
         FROM information_schema.columns 
         WHERE table_name = $1 
         ORDER BY ordinal_position;`,
        [table]
      );

      // Fetch all rows
      const dataRes = await client.query(`SELECT * FROM "${table}";`);

      if (dataRes.rows.length > 0) {
        const columns = Object.keys(dataRes.rows[0]);
        for (const row of dataRes.rows) {
          const valStrings = columns.map((col) => {
            const val = row[col];
            if (val === null || val === undefined) return 'NULL';
            if (typeof val === 'boolean' || typeof val === 'number') return val;
            if (typeof val === 'object') return `'${JSON.stringify(val).replace(/'/g, "''")}'`;
            if (val instanceof Date) return `'${val.toISOString()}'`;
            return `'${String(val).replace(/'/g, "''")}'`;
          });

          sqlDump += `INSERT INTO "${table}" ("${columns.join('", "')}") VALUES (${valStrings.join(', ')});\n`;
        }
        sqlDump += `\n`;
      } else {
        sqlDump += `-- (No rows in table ${table})\n\n`;
      }
    }

    const schemaDir = path.join(__dirname, '..', 'schema');
    if (!fs.existsSync(schemaDir)) {
      fs.mkdirSync(schemaDir, { recursive: true });
    }

    const exportPath = path.join(schemaDir, 'schema.sql');
    const backupPath = path.join(schemaDir, 'devspectra_database.sql');

    fs.writeFileSync(exportPath, sqlDump, 'utf8');
    fs.writeFileSync(backupPath, sqlDump, 'utf8');

    console.log(`Database exported successfully to: ${exportPath}`);
  } catch (err) {
    console.error('Error exporting database:', err);
  } finally {
    await client.end();
  }
}

exportDatabase();
