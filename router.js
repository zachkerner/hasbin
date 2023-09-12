const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose')
const model = require('./database/model.js')
const db = require("./database/database.js")
mongoose.connect("mongodb://localhost:27017/RecycleBin")

router.get('/', async (req, res) => {
  console.log(model)
  const request = await model.Bin.create({ bin_path: "1", request: 'hello world' })
	await request.save()
  console.log('saved')
});

app.use('/', router)

app.listen(3000, () => {
  console.log('listening on port', 3000);
});