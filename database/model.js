//Connect the database:
const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
	bin_path: String,
	request: String
})

//Parameters are title, schema
const Bin = mongoose.model("RecycleBin", binSchema)

module.exports = {
  Bin
};