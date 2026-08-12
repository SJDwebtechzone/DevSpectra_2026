const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'devspectra',
  password: 'root3',
  port: 5432,
});
client.connect().then(() => {
  client.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users';").then(res => {
    console.log(res.rows);
    client.end();
  });
});
