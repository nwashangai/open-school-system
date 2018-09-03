const guardianHelper = require('../helpers/guardianHelper');

class GuardianController {
  /**
   * Create guardian record
   * @method
   * @param {object} request
   * @param {object} response
   */
  async setGuardian(request, response) {
    await guardianHelper.createGuardian(request.body).then((done) => {
      response.status(200).json({ status: 'success', message: 'Record added', entry: done });
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }
}

module.exports = new GuardianController();
