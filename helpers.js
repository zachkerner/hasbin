const crypto = require('crypto');

const hash = string => {
  return crypto.createHash('shake256', {outputLength: 8}).update(string).digest('hex');
}

const uuid = () => {
  return crypto.randomUUID();
}

function parse_request(req) {
  const bodyContent = req.body ? req.body : ""
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  const rawData = JSON.stringify({
    method: req.method,
    url: fullUrl,
    headers: req.headers,
    body: bodyContent
  })
  return rawData
}

module.exports = {
  hash,
  parse_request,
  uuid
};