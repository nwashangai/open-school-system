import chai from 'chai';
import 'babel-polyfill';
import chaiHttp from 'chai-http';

import app from '../application/app';

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {
  it('it should GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

/* Test to Authenticate User */
describe('Login attempts', () => {
  it('it should login user', (done) => {
    chai.request(app)
      .post('/api/v1/user/login')
      .send({
        email: 'johndoe@gmail.com',
        password: '12345'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('token');
        done();
      });
  });

  it('it should reject request', (done) => {
    chai.request(app)
      .post('/api/v1/user/login')
      .send({
        email: 'johndoe@gmail.com',
        password: '123456'
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message', 'Wrong password');
        done();
      });
  });

  it('it should reject request', (done) => {
    chai.request(app)
      .post('/api/v1/user/login')
      .send({
        email: 'fakeuser@gmail.com',
        password: '123456'
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message', 'Email does not exist');
        done();
      });
  });
});

/* Test the /API route to confirm database setup */
describe('create student', () => {
  it('it should create student record', (done) => {
    chai.request(app)
      .post('/api/v1/student/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send({
        email: 'example@host.com',
        student_id: 'ABC123',
        last_name: 'Doe',
        first_name: 'John',
        gender: 'male',
        dob: '2002-04-07',
        blood_group: 'A',
        nationality: 'Nigerian',
        language: 'english',
        religion: 'Christain',
        student_category: 'New',
        student_type: 'Day',
        address_1: '1 new street',
        phone: '0123456789',
        city: 'FCT',
        state: 'Abuja',
        country: 'Nigeria',
        password: 'young'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('message', 'Record added');
        done();
      });
  });

  it('it should Reject duplicate', (done) => {
    chai.request(app)
      .post('/api/v1/student/create')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .send({
        email: 'example@host.com',
        student_id: 'ABC123',
        last_name: 'Doe',
        first_name: 'John',
        gender: 'male',
        dob: '2002-04-07',
        blood_group: 'A',
        nationality: 'Nigerian',
        language: 'english',
        religion: 'Christain',
        student_category: 'New',
        student_type: 'Day',
        address_1: '1 new street',
        phone: '0123456789',
        city: 'FCT',
        state: 'Abuja',
        country: 'Nigeria',
        password: 'young'
      })
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.have.property('status', 'error');
        done();
      });
  });

  it('it should GET /students', (done) => {
    chai.request(app)
      .get('/api/v1/student')
      .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiam9obmRvZUBnbWFpbC5jb20iLCJpYXQiOjE1MzQ3MTczNTB9.O3WwKabBT8ZWZlcscQxAJVrRrBQROmymuMDJA66ZPWE')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('entries');
        done();
      });
  });
});
