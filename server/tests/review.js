import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import { reviewData } from './mockData/review';
import reviews from '../dummyDb/review';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/businesses/1/reviews';
const url1 = '/api/v1/businesses/2/reviews';

describe('Test for REVIEW related routes', () => {
  describe('Test for POST review API', () => {
    it('Should return 400 if CONTENT is undefined', (done) => {
      chai.request(app)
        .post(url1)
        .send(reviewData[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please specify content here');
          done();
        });
    });
    it('Should return 400 if CONTENT is empty', (done) => {
      chai.request(app)
        .post(url1)
        .send(reviewData[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Content can not be empty');
          done();
        });
    });
    it('Should return 400 if CONTENT input exceeds 500', (done) => {
      chai.request(app)
        .post(url1)
        .send(reviewData[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Please restrict the review to 500 or less characters');
          done();
        });
    });
    it('Should return 400 if CONTENT contains invalid input', (done) => {
      chai.request(app)
        .post(url1)
        .send(reviewData[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('This field permits only characters,numbers and (!,.)');
          done();
        });
    });
    it('Should return 201 for successful review of a business', (done) => {
      const newLength = reviews.length + 1;
      chai.request(app)
        .post(url1)
        .send(reviewData[4])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Review successfully created');
          expect(res.body).to.have.property('addedReview');
          expect(reviews).to.have.length(newLength);
          done();
        });
    });
    it('Should return 201 for successful review of another business', (done) => {
      const newLength = reviews.length + 1;
      chai.request(app)
        .post(url1)
        .send(reviewData[5])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Review successfully created');
          expect(res.body).to.have.property('addedReview');
          expect(reviews).to.have.length(newLength);
          done();
        });
    });
    it('Should return 404 if business to be reviewed is not in the database', (done) => {
      chai.request(app)
        .post(url)
        .send(reviewData[6])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business not found');
          done();
        });
    });
  });
  describe('Test for get ALL Business Reviews API', () => {
    it('Should return 200 for successfully fetching all the reviews of an existing business', (done) => {
      chai.request(app)
        .get(url1)
        .send(reviewData[4])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Reviews served successfully');
          expect(res.body).to.have.property('allReviews');
          done();
        });
    });
    /** it('Should return 404 if business exists but has no reviews yet', (done) => {
      chai.request(app)
        .get(url)
        .send(reviewData[6])
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.message).to.equal('Business not found');
          done();
        });
    }); */
  });
});
