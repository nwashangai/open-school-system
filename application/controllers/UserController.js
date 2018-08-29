import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';
import mailer from '../helpers/mailer';
import User from '../helpers/userHelper';
require('dotenv').config();

const secretOrKey = process.env.SECRET;

class UserController {
  /**
   * User login
   * @method
   * @param {object} request
   * @param {object} response
   */
  async login(request, response) {
    await models.users.findAll({
      where: {
        email: request.body.email
      }
    }).then((done) => {
      if (done.length > 0) {
        /* bcrypt.hash(request.body.password, 10, (err, hash) => {
          console.log(hash);
        }); */
        bcrypt.compare(request.body.password, done[0].dataValues.password, (err, res) => {
          if (res) {
            const payload = { emailId: done[0].dataValues.email };
            const token = jwt.sign(payload, secretOrKey);
            response.status(200).json({ status: 'success', token });
          } else {
            response.status(400).json({ status: 'error', message: 'Wrong password' });
          }
        });
      } else {
        response.status(400).json({ status: 'error', message: 'Email does not exist' });
      }
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }

  /**
   * User reset password request
   * @method
   * @param {object} request
   * @param {object} response
   */
  async requestPasswordReset(request, response) {
    await models.users.findAll({
      where: {
        email: request.body.email
      }
    }).then((done) => {
      if (done.length > 0) {
        mailer.passwordReset(request.body.email).then(() => {
          response.status(200).json({ status: 'success', message: 'check your email to reset password' });
        }).catch((error) => {
          response.status(500).json({ status: 'error', message: error.message });
        });
      } else {
        response.status(400).json({ status: 'error', message: 'email does not exist' });
      }
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }

  /**
   * User reset password
   * @method
   * @param {object} request
   * @param {object} response
   */
  async passwordReset(request, response) {
    await models.users.findAll({
      where: {
        email: request.body.email
      }
    }).then((done) => {
      if (done.length > 0) {
        if (User.timeCheck(request.query.payload) === 0) {
          bcrypt.hash(request.body.password, 10, (err, hash) => {
            User.updatePassword(request.body.email, hash).then((done) => {
              response.status(200).json({ status: 'success', update: `${done[0]} record update` });
            }).catch((error) => {
              response.status(500).json({ status: 'error', message: error.message });
            });
          });
        } else {
          response.status(401).json({ status: 'error', message: 'given time exceeded' });
        }
      } else {
        response.status(400).json({ status: 'error', message: 'email does not exist' });
      }
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }
}

module.exports = new UserController();
