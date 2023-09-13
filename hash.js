const crypto = require('crypto');

const hash = string => {
  newHash = crypto.createHash('sha256').update(string).digest('hex');
  return newHash.substring(0, 15);
}

module.exports = hash;