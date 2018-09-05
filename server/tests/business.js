import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import { inValidBusinessData, validBusinessData } from './mockData/business';
import businesses from '../dummyDb/business';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/businesses';
/**
 * The businessId value does
 * not matter, what does is the business
 * being sent.
 */
const businessId = 1;
const businessId1 = 2;
const businessId2 = 2;
const putUrl = `/api/v1/businesses/${businessId}`;
const deleteUrl = `/api/v1/businesses/${businessId}`;
const deleteURL = `/api/v1/businesses/${businessId1}`;
const getOneUrl = `/api/v1/businesses/${businessId2}`;


describe('Test for BUSINESS related route', () => {
  describe('Test for register Business API', () => {
    it('Should return 400 if BUSINESS NAME is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please specify business name');
          done();
        });
    });
    it('Should return 400 if BUSINESS NAME field is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business name field can not be empty');
          done();
        });
    });
    it('Should return 400 if BUSINESS NAME is longer than 100 characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Ensure that your business name is between 1 to 100 characters');
          done();
        });
    });
    it('Should return 400 if BUSINESS NAME has invalid characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Only alphanumeric characters are allowed');
          done();
        });
    });
    it('Should return 400 if DESCRIPTION is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please give us a brief summary of your business');
          done();
        });
    });
    it('Should return 400 if DESCRIPTION field is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[5])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Description field can not be empty');
          done();
        });
    });
    it('Should return 400 if DESCRIPTION field is too long or too short', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[6])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please restrict the description between 1 and 50 characters');
          done();
        });
    });
    it('Should return 400 if DESCRIPTION field contains invalid characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[7])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Only alphanumeric characters are allowed in this field');
          done();
        });
    });
    it('Should return 400 if LOCATION field is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[8])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please specify location');
          done();
        });
    });
    it('Should return 400 if LOCATION field is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[9])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Location field can not be empty');
          done();
        });
    });
    it('Should return 400 if LOCATION contains invalid characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[10])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('location should contain alphabets only');
          done();
        });
    });
    it('Should return 400 if LOCATION field is too long or too short', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[11])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('We recommend for sanity sake that location should be between 2 and 30 characters');
          done();
        });
    });
    it('Should return 400 if CATEGORY field is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[12])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('You have made no input for category');
          done();
        });
    });
    it('Should return 400 if CATEGORY field is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[13])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Category field can not be empty');
          done();
        });
    });
    it('Should return 400 if CATEGORY field has invalid characters', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[14])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Category can contain alphabets only');
          done();
        });
    });
    it('Should return 400 if CATEGORY field is too long or too short', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[15])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('For sanity sake, we recommend that characters should be between 2 and 15 characters');
          done();
        });
    });
    it('Should return 400 if EMAIL field is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[16])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('You have made no input for email');
          done();
        });
    });
    it('Should return 400 if EMAIL field is empty', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[17])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Email field can not be empty');
          done();
        });
    });
    it('Should return 400 if EMAIL input is invalid', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[18])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Your email format is invalid');
          done();
        });
    });
    it('Should return 400 if PHONE NUMBER field is undefined', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[19])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Supply your phone number');
          done();
        });
    });
    it('Should return 400 if PHONE NUMBER field is EMPTY', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[20])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Phone number can not be empty');
          done();
        });
    });
    it('Should return 400 if PHONE NUMBER input is invalid', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidBusinessData[21])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Invalid phone number format');
          done();
        });
    });
    it('Should return 201 for successful business creation', (done) => {
      const newLength = businesses.length + 1;
      chai.request(app)
        .post(url)
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business successfully created');
          expect(res.body).to.have.property('newBusiness');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 for successful creation of another business', (done) => {
      const newLength = businesses.length + 1;
      chai.request(app)
        .post(url)
        .send(validBusinessData[1])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business successfully created');
          expect(res.body).to.have.property('newBusiness');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 409 if BUSINESS NAME already exists', (done) => {
      chai.request(app)
        .post(url)
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business name already exists');
          done();
        });
    });
    it('Should return 409 if EMAIL already exists', (done) => {
      chai.request(app)
        .post(url)
        .send(validBusinessData[3])
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Email already exists');
          done();
        });
    });
  });
  describe('Test for UPDATE Business API', () => {
    it('Should return 205 for a successful business update', (done) => {
      const newLength = businesses.length;
      chai.request(app)
        .put(putUrl)
        .send(validBusinessData[2])
        .end((err, res) => {
          res.should.have.status(205);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Profile updated successfully');
          expect(res.body).to.have.property('foundBusiness');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 205 for the successful update of another business', (done) => {
      const newLength = businesses.length;
      chai.request(app)
        .put(putUrl)
        .send(validBusinessData[5])
        .end((err, res) => {
          res.should.have.status(205);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Profile updated successfully');
          expect(res.body).to.have.property('foundBusiness');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
  });
  describe('TEST for DELETE Business API', () => {
    it('Should return 200 for a successful business deletion', (done) => {
      const newLength = businesses.length - 1;
      chai.request(app)
        .delete(deleteUrl)
        .send(validBusinessData[2])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business successfully removed');
          expect(res.body).to.have.property('businesses');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 200 for a successful deletion of another business', (done) => {
      const newLength = businesses.length - 1;
      chai.request(app)
        .delete(deleteURL)
        .send(validBusinessData[5])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business successfully removed');
          expect(res.body).to.have.property('businesses');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
  });
  describe('Test for get(ONE, ALL, NON-EXISTENT, QUERY) Businesses API', () => {
    it('Should return 200 for succesfully fetching a business', (done) => {
      const newLength = businesses.length;
      chai.request(app)
        .get(getOneUrl)
        .send(validBusinessData[1])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business successfully served');
          expect(res.body).to.have.property('foundBusiness');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 200 for succesfully fetching all businesses', (done) => {
      const newLength = businesses.length;
      chai.request(app)
        .get(url)
        .send(validBusinessData[0], validBusinessData[1])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('All businesses served successfully');
          expect(res.body).to.have.property('businesses');
          expect(businesses).to.have.length(newLength);
          done();
        });
    });
    it('Should return 404 for business not in database', (done) => {
      chai.request(app)
        .get(deleteUrl)
        .send(validBusinessData[2])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business not found');
          done();
        });
    });
    it('Should return 404 for non-existing location', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?location=Beirut')
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Location does not exist');
          done();
        });
    });
    it('Should return 200 for existing location', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?location=Quebec')
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('locationFilter');
          done();
        });
    });
    it('Should return 404 for non-existing category', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?category=Music')
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Category does not exist');
          done();
        });
    });
    it('Should return 200 for existing category', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?category=hospitality')
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('categoryFilter');
          done();
        });
    });
    it('Should return 404 for non-existing location and category', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?location=Beirut&category=Music')
        .send(validBusinessData[0])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Location and category matching was not found');
          done();
        });
    });
    it('Should return 200 for existing location and category', (done) => {
      chai.request(app)
        .get('/api/v1/businesses?location=lagos&category=education')
        .send(validBusinessData[1])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body).to.have.property('filteredArray');
          done();
        });
    });
  });
});
