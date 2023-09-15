const express = require('express');
const router = express.Router();
const mongo = require('./database/mongo.js')
const helpers = require('./helpers.js')
const psql = require('./database/psql.js')

router.get('/', async (req, res) => {
  //Get all the requests and give them
  let requests = await psql.getAllRequests()
  res.json(requests)
})

router.get('/requests', async (req, res) => {
  //Get all the bins and give them
  let bins = await psql.getAllBins()
  res.json(bins)
})

router.post('/', async (req, res) => {
  //Put the bin in the bin table
  await psql.addNewBin()
  res.redirect('http://localhost:5173');
})

router.post('/bins/:bin_path', async (req, res) => {
  rawData = helpers.parse_request(req)
  const bodyContent = req.body ? req.body : ""
  let mongoId = await mongo.push(req.params.bin_path, rawData)
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  await psql.addNewRequest(req.params.bin_path, mongoId, new Date(Date.now()).toString(), req.method, fullUrl, bodyContent)
});

module.exports = router;