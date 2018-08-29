import chai from 'chai';
import 'babel-polyfill';
import chaiHttp from 'chai-http';
import encrypt from '../../application/helpers/crypto';

import app from '../../application/app';

chai.should();
chai.use(chaiHttp);

const timer = new Date();
const oldTime = new Date('2017-04-11T10:20:30Z');
timer.setDate(timer.getDate() + 1);
const oldCypher = encrypt.encrypt(oldTime.toDateString());
const cypher = encrypt.encrypt(timer.toDateString());

/* Test the /GET route */
describe('User password reset tests', () => {
  it('it should reject invalid email', (done) => {
    chai.request(app)
      .post('/api/v1/user/requestPasswordReset')
      .send({ email: 'johndoe1@gmail.com' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message', 'email does not exist');
        done();
      });
  });

  it('it should send password reset email', (done) => {
    chai.request(app)
      .post('/api/v1/user/requestPasswordReset')
      .send({ email: 'johndoe@gmail.com' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('message', 'check your email to reset password');
        done();
      });
  });

  it('it should reject invalid email', (done) => {
    chai.request(app)
      .put(`/api/v1/user/resetPassword?payload=${cypher}`)
      .send({ email: 'johndoe1@gmail.com', password: 'young' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message', 'email does not exist');
        done();
      });
  });

  it('it should reject Exceeded time frame', (done) => {
    chai.request(app)
      .put(`/api/v1/user/resetPassword?payload=${oldCypher}`)
      .send({ email: 'johndoe@gmail.com', password: 'young' })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.property('status', 'error');
        res.body.should.have.property('message', 'given time exceeded');
        done();
      });
  });

  it('it should reset password of the given user', (done) => {
    chai.request(app)
      .put(`/api/v1/user/resetPassword?payload=${cypher}`)
      .send({ email: 'johndoe@gmail.com', password: 'young' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status', 'success');
        res.body.should.have.property('update', '1 record update');
        done();
      });
  });
})