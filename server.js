// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router.js')
var cors = require("cors");
//uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
// ROUTES
app.use('/', router)
// Start listening for requests on a specific port
app.listen(3000, () => {
  console.log('listening on port', 3000);
});