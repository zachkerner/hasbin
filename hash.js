const crypto = require('crypto');
const inputString = 'YourInputDataHere';
const hash = crypto.createHash('sha256').update(inputString).digest('hex');
const truncatedHash = hash.substring(0, 15);

console.log(truncatedHash); // This will be a 15-character string
