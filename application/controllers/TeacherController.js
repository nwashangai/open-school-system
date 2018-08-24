import models from '../models';
const teacherHelper = require('../helpers/teacherHelper');

class TeacherController {
  /**
   * Create teacher record
   * @method
   * @param {object} request
   * @param {object} response
   */
  async setTeacher(request, response) {
    await teacherHelper.createTeacher(request.body).then((done) => {
      response.status(200).json({ status: 'success', message: 'Record added', entry: done });
    }).catch((error) => {
      response.status(500).json({ status: 'error', data: error.message });
    });
  }
}

module.exports = new TeacherController();
