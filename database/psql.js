// Check if path to hash module is still correct
const helper = require('./../helpers.js')
const uuid = require('uuid');

const pool = require("./psql_pool") // db connection

const getAllBins = async () => {
  let results = await pool.query('SELECT bin_path FROM bin ORDER BY id DESC')
  return results.rows;
}

// New Endpoint
const addNewBin = async () => {
  const uuid = helper.uuid();
  const hashedPath = helper.hash(uuid);

  await pool.query('INSERT INTO bin (id, bin_path) VALUES ($1, $2);', [uuid, hashedPath]);
}

// async function test() {
//   await addNewBin()
//   console.log('done')
// }
// test()

const getBinId = async (bin_path) => {
  let results = await pool.query('SELECT id FROM bin WHERE bin_path = $1', [bin_path])
  return uuid.parse(results.rows[0].id);
}

const getAllRequests = async () => {
  let results = await pool.query('SELECT received_at, http_method, http_path, body FROM request ORDER BY id DESC')
  return results.rows;
}

const addNewRequest = async (bin_path, mongoId, received_at, method, path, body) => {
  const bin_id = await getBinId(bin_path)

  await pool.query('INSERT INTO request (bin_id, mongo_id, received_at, http_method, http_path, body) VALUES ($1, $2, $3, $4, $5, $6);', [bin_id, mongoId, received_at, method, path, body])
}

module.exports = { 
  getAllBins,
  addNewBin,
  getBinId,
  getAllRequests,
  addNewRequest
}