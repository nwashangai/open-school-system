import jwt from 'jsonwebtoken';
require('dotenv').config();

exports.getUser = (req, res, next) => {
  const token = req.body.token || req.headers.authorization;

  if (token) {
    jwt.verify(token.slice(4), process.env.SECRET, (err, decoded) => {
      if (err) {
        req.decoded = null;
        next();
      }
      req.decoded = decoded;
      next();
    });
  } else {
    req.decoded = null;
    next();
  }
}