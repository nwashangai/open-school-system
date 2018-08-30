import chai from 'chai';
import 'babel-polyfill';
import chaiHttp from 'chai-http';

import app from '../application/app';

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {
  it('it should GET docs', (done) => {
    chai.request(app)
      .get('/api-docs')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
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

  it('it should reject invalid credentials', (done) => {
    chai.request(app)
      .post('/api/v1/user/login')
      .send({
        email: 'johndoegmail.com',
        password: '12345'
      })
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message');
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

require('./teacher/basicTest');
require('./student/basicTest');
require('./staff/basicTest');
require('./users/basicTest');
