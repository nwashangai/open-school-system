const crypto = require('crypto');
require('dotenv').config();

const algorithm = 'aes-256-ctr';
const password = process.env.SECRET;

exports.encrypt = (text) => {
  const cipher = crypto.createCipher(algorithm,password);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

exports.decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm,password);
  let dec = decipher.update(text,'hex','utf8');
  dec += decipher.final('utf8');
  return dec;
}