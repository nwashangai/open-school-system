import chai from 'chai';
import 'babel-polyfill';
import chaiHttp from 'chai-http';
import models from '../../application/models';

import app from '../../application/app';

chai.should();
chai.use(chaiHttp);

const teacher = {
  email: 'newdon@gmail.com',
  role: 'teacher',
  last_name: 'newton',
  first_name: 'chu',
  gender: 'male',
  dob: '2002-04-07',
  blood_group: 'a',
  nationality: 'Nigerian',
  job_title: 'Teacher',
  // department: '777b046e-8e53-4e8f-b2a0-eb6c7568dd00',
  level: 'level 30',
  qualification: 'bachelors degreee',
  total_experience: 'six months',
  marital_status: 'single',
  number_of_children: '0',
  father_name: 'okonkwo',
  mother_name: 'nnenna',
  language: 'english',
  religion: 'christain',
  address_1: '58 citylight',
  phone: '09012334567',
  city: 'ikeja',
  state: 'lagos',
  country: 'Nigeria'
}
/* Test the /GET route */
describe('Teacher information test', () => {
  let department = null;
  it('it should reject unauthorize user', async () => {
    department = await models.departments.findOne({
      attributes: ['id']
    });
    teacher.department = department.dataValues.id;
    chai.request(app)
      .post('/api/v1/teacher/create')
      .send(teacher)
      .end((err, res) => {
        res.should.have.status(401);
      });
  });

  it('it should reject unauthorized user', () => {
    chai.request(app)
      .post('/api/v1/teacher/create')
      .set('Authorization', 'JWT yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(teacher)
      .end((err, res) => {
        res.should.have.status(401);
      });
  });

  it('it should save teacher info', () => {
    chai.request(app)
      .post('/api/v1/teacher/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(teacher)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('message', 'Record added');
      });
  });

  it('it should reject duplicate email', () => {
    chai.request(app)
      .post('/api/v1/teacher/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(teacher)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('data');
      });
  });

  it('it should reject incomplete request', () => {
    delete teacher.country;
    chai.request(app)
      .post('/api/v1/teacher/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(teacher)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('data');
      });
  });
});
