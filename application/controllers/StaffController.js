import models from '../models';
const staffHelper = require('../helpers/staffHelper');

class StaffController {
  /**
   * Create teacher record
   * @method
   * @param {object} request
   * @param {object} response
   */
  async setStaff(request, response) {
    await staffHelper.createStaff(request.body).then((done) => {
      response.status(200).json({ status: 'success', message: 'Record added', entry: done });
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }
}

module.exports = new StaffController();
