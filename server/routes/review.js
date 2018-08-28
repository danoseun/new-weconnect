import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { ReviewController } = controllers;
const { postReview, getAllReviews } = ReviewController;
const { ReviewChecker, BusinessValidator } = validators;
const { verifyContent } = ReviewChecker;
const { getOneBusiness } = BusinessValidator;

// Instance of express router

const reviewRouter = express.Router();

reviewRouter.post('/businesses/:businessId/reviews', getOneBusiness, verifyContent, postReview);
reviewRouter.get('/businesses/:businessId/reviews', getOneBusiness, getAllReviews);

export default reviewRouter;
