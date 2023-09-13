const mongoose = require('mongoose')
const model = require('./model.js')
mongoose.connect("mongodb://localhost:27017/RecycleBin")

async function push(path, rawData) {
  const request = await model.Bin.create({ bin_path: path, request: rawData })
	await request.save()
  return request._id.toString()
}

module.exports = {
  push
};