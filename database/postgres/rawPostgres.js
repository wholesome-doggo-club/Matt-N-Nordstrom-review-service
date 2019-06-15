const Pool = require('pg').Pool

const pool = new Pool({
  user: null,
  host: 'localhost',
  database: 'reviews',
  password: null,
})

module.exports = pool;