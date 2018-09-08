import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import {
  validSignUpData, inValidSignUpData, validSignInData,
  inValidSignInData
} from './mockData/user';
import users from '../dummyDb/user';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/auth/signup';
const url2 = '/api/v1/auth/login';


describe('Test for user route', () => {
  describe('Test for signUp API', () => {
    it('Should return 201 status code and create new user', (done) => {
      const newLength = users.length + 1;
      chai.request(app)
        .post(url)
        .send(validSignUpData[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          expect(res.body.message).to.equal('Signup was successful');
          expect(res.body).to.have.property('newUser');
          expect(users).to.have.length(newLength);
          done();
        });
    });
  });
  it('Should return 201 and create another user', (done) => {
    const newLength = users.length + 1;
    chai.request(app)
      .post(url)
      .send(validSignUpData[3])
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Signup was successful');
        expect(res.body).to.have.property('newUser');
        expect(users).to.have.length(newLength);
        done();
      });
  });
  it('Should return 409 for existing email', (done) => {
    chai.request(app)
      .post(url)
      .send(validSignUpData[1])
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Email already exists!');
        done();
      });
  });
  it('Should return 409 for existing username', (done) => {
    chai.request(app)
      .post(url)
      .send(validSignUpData[2])
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('username already taken');
        done();
      });
  });
  it('Should return 400 for empty firstname field', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[0])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Pls supply your first name');
        done();
      });
  });
  it('Should return 400 for empty lastname field', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[1])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Input field cannot be empty');
        done();
      });
  });
  it('Should return 400 for empty email field', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[2])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('email cannot be empty');
        done();
      });
  });
  it('Should return 400 for empty username field', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[3])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('username can not be empty');
        done();
      });
  });
  it('Should return 400 for empty password field', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[4])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Password field cannot be empty');
        done();
      });
  });
  it('Should return 400 if firstname is undefined', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[5])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Pls supply your first name');
        done();
      });
  });
  it('Should return 400 if lastname is undefined', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[6])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Input field cannot be empty');
        done();
      });
  });
  it('Should return 400 if email is undefined', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[7])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('You have made no input for email');
        done();
      });
  });
  it('Should return 400 if username is undefined', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[8])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Username was not supplied');
        done();
      });
  });
  it('Should return 400 if password is undefined', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[9])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('You have made no input for password');
        done();
      });
  });
  it('Should return 400 if firstname is less than two characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[10])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('first name should be 2 to 20 characters');
        done();
      });
  });
  it('Should return 400 if firstname is more than 20 characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[11])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('first name should be 2 to 20 characters');
        done();
      });
  });
  it('Should return 400 if lastname is less than 2 characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[12])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('last name should be 2 to 20 characters');
        done();
      });
  });
  it('Should return 400 if lastname is more than 20 characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[13])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('last name should be 2 to 20 characters');
        done();
      });
  });
  it('Should return 400 if firstname contains invalid characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[14])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('first name can only contain alphabets');
        done();
      });
  });
  it('Should return 400 if lastname contains invalid characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[15])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('last name can only contain alphabets');
        done();
      });
  });
  it('Should return 400 if username is less than 2 characters long', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[16])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('username should be 2 to 10 characters long');
        done();
      });
  });
  it('Should return 400 if username is greater than 10 characters long', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[17])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('username should be 2 to 10 characters long');
        done();
      });
  });
  it('Should return 400 if username includes space', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[18])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('use a single name or word as your username');
        done();
      });
  });
  it('Should return 400 if username contains invalid characters', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[19])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Username can only contain alphanumeric characters');
        done();
      });
  });
  it('Should return 400 for invalid email format', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[20])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Your email format is invalid');
        done();
      });
  });
  it('Should return 400 if email is greater than 30 characters long', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[21])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Your email should be 10 to 30 characters long');
        done();
      });
  });
  it('Should return 400 if password is greater than 15 characters long', (done) => {
    chai.request(app)
      .post(url)
      .send(inValidSignUpData[22])
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Password should not be greater than 15 characters');
        done();
      });
  });
  describe('Test for login API', () => {
    it('Should return 401 if username field is undefined', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[0])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('You have made no input for username');
          done();
        });
    });
    it('Should return 401 if username field is empty', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[2])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('username field cannot be empty');
          done();
        });
    });
    it('Should return 401 if password is undefined', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[1])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('No password was supplied');
          done();
        });
    });
    it('Should return 401 if password is empty', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[3])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Fill in your password');
          done();
        });
    });
    it('Should return 401 if username is not found', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[4])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Authentication failed');
          done();
        });
    });
    it('Should return 401 if username does not tally with password supplied', (done) => {
      chai.request(app)
        .post(url2)
        .send(inValidSignInData[5])
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Authentication unsuccessful');
          done();
        });
    });
    it('Should return 200 for successful login', (done) => {
      const newLength = users.length;
      chai.request(app)
        .post(url2)
        .send(validSignInData[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.a('string');
          expect(users).to.have.length(newLength);
          done();
        });
    });
    it('Should return 200 for another successful login', (done) => {
      const newLength = users.length;
      chai.request(app)
        .post(url2)
        .send(validSignInData[1])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.a('string');
          expect(users).to.have.length(newLength);
          done();
        });
    });
  });
});
