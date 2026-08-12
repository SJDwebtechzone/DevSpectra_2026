const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'devspectra',
  password: 'root3',
  port: 5432,
});
client.connect().then(() => {
  client.query("SELECT table_name, column_name FROM information_schema.columns WHERE table_name IN ('projects', 'contacts');").then(res => {
    console.log(res.rows);
    client.end();
  });
});
