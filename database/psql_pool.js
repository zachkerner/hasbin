const pg = require('pg');

let config = {
  // user: 'tai',
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    database: 'recycledb', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
    password: 'potion',
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgresql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
  // console.error('PostgreSQL pool error:', err);
});

module.exports = pool;