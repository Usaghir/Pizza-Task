const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Random001',
  host: 'localhost',
  port: 5432,
  database: 'topizza',
});

module.exports = pool;
