import express from 'express';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import models from '../models';
require('dotenv').config();

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = process.env.SECRET;

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
  // this would be a database call:
  models.users.findAll({
    where: {
      email: jwtPayload.emailId
    }
  }).then((done) => {
    if (done.length > 0) {
      next(null, done);
    } else {
      next(null, false);
    }
  }).catch((error) => {
    next(null, false);
  });
});

passport.use(strategy);

express().use(passport.initialize());

export default passport.authenticate('jwt', { session: false });
