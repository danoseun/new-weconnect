import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { BusinessController } = controllers;
const { registerBusiness } = BusinessController;

const { BusinessValidator } = validators;
const { getOneBusiness, businessValidator } = BusinessValidator;

// Create an instance of the exprees router
const businessRouter = express.Router();

businessRouter.post('/businesses', businessValidator, registerBusiness);

export default businessRouter;
