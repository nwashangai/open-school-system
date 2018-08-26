import chai from 'chai';
import 'babel-polyfill';
import chaiHttp from 'chai-http';

import app from '../../application/app';

chai.should();
chai.use(chaiHttp);

const staff = {
  email: 'newstaff@gmail.com',
  last_name: 'newton',
  first_name: 'chu',
  gender: 'male',
  dob: '2002-04-07',
  blood_group: 'A',
  nationality: 'Nigerian',
  job_title: 'cleaner',
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
/* Test staff creation routes */
describe('Staff information tests', () => {
  it('it should reject unauthorize user', (done) => {
    chai.request(app)
      .post('/api/v1/staff/create')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should reject unauthorized user', (done) => {
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('it should reject invalid input', (done) => {
    staff.nationality = '$skb_oy';
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should reject invalid input', (done) => {
    staff.nationality = 'Nigerian';
    staff.father_name = '#the_man';
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should reject invalid input', (done) => {
    staff.father_name = 'okonkwo';
    staff.language = 'new-lang';
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should reject invalid input', (done) => {
    staff.language = 'English';
    staff.religion = 'omo__yoruba';
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should save staff info', (done) => {
    staff.religion = 'Christain';
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('message', 'Record added');
        done();
      });
  });

  it('it should reject duplicate email', (done) => {
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should reject incomplete request', (done) => {
    delete staff.first_name;
    chai.request(app)
      .post('/api/v1/staff/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send(staff)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
        done();
      });
  });
});
