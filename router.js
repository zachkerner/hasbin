const express = require('express');
const router = express.Router();
const mongo = require('./database/mongo.js')
const helpers = require('./helpers.js')

router.post('/', (req, res) => {
  console.log(helpers.hash(req.body.title))
})

router.get('/bins/:bin_path', async (req, res) => {
  rawData = helpers.parse_request(req)
  let mongoId = await mongo.push(req.params.bin_path, rawData)
});

module.exports = router;