// Check if path to hash module is still correct
const { hash, uuid } = require("../hash");

const dbPool = require("./psql_pool") // db connection

const getBins = () => {
  pool.query('SELECT bin_path FROM bins ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error;
    }
     return results.rows;
  })
}

// New Endpoint
const addNewBin = () => {
  const uuid = uuid();
  const hashedPath = hash(uuid);

  dbPool.query('INSERT INTO bin (id, bin_path) VALUES ($1, $2);', [uuid, hashedPath], (error, results) => {
    if (error) {
      throw error;
    }
    return;
  });
}

const getBinId = (bin_path) => {
  pool.query('SELECT id FROM bins WHERE bin_path = $1', [bin_path], (error, results) => {
    if (error) {
      throw error;
    }
    return results.rows[0];
  })
}

const getBinRequests = (bin_path) => {
  const binId = getBinId(bin_path)

  pool.query('SELECT timestamp, http_method, http_path, mongo_id FROM requests WHERE bin_id = $1 ORDER BY id DESC', [binId], (error, results) => {
    if (error) {
      throw error;
    }
    return results.rows;
  })
}

const addNewRequest = (bin_path, mongoId) => {

}

module.exports = {  }
