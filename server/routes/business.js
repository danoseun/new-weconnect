import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { BusinessController } = controllers;
const {
  registerBusiness, updateBusiness, deleteBusiness, getOne
} = BusinessController;

const { BusinessValidator } = validators;
const { getOneBusiness, businessValidator } = BusinessValidator;

// Create an instance of the exprees router
const businessRouter = express.Router();

businessRouter.post('/businesses', businessValidator, registerBusiness);
businessRouter.put('/businesses/:businessId', businessValidator, getOneBusiness, updateBusiness);
businessRouter.delete('/businesses/:businessId', getOneBusiness, deleteBusiness);
businessRouter.get('/businesses/:businessId', getOneBusiness, getOne);

export default businessRouter;
