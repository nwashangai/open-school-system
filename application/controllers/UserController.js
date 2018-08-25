import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models';
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
}

module.exports = new UserController();
