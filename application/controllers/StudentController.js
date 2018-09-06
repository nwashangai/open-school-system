import models from '../models';
const studentHelper = require('../helpers/studentHelper');

class StudentController {
  /**
   * Create Student record
   * @method
   * @param {object} request
   * @param {object} response
   */
  async setStudent(request, response) {
    await studentHelper.createStudent(request.body).then((done) => {
      response.status(200).json({ status: 'success', message: 'Record added', entry: done });
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }

  /**
   * Get all students
   * @method
   * @param {object} request
   * @param {object} response
   */
  async getStudents(request, response) {
    console.log(request.decoded);
    await models.students.findAll({
      include: [
        { model: models.users }
      ]
    }).then((done) => {
      response.status(200).json({ status: 'success', entries: done });
    }).catch((error) => {
      response.status(500).json({ status: 'error', message: error.message });
    });
  }
}

module.exports = new StudentController();
