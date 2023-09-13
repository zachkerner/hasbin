const crypto = require('crypto');

const hash = string => {
  newHash = crypto.createHash('sha256').update(string).digest('hex');
  return newHash.substring(0, 15);
}

const uuid = () => {
  return crypto.randomUUID();
}

function parse_request(req) {
  const bodyContent = req.body ? req.body : ""
  const rawData = JSON.stringify({
    method: req.method,
    url: req.url,
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