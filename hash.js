const crypto = require('crypto');

const hash = string => {
  return crypto.createHash('shake256', {outputLength: 8}).update(string).digest('hex');
}

const uuid = () => {
  return crypto.randomUUID();
}

module.exports = { hash, uuid };
