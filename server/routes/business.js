import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { BusinessController } = controllers;
const {
  registerBusiness, updateBusiness, deleteBusiness, getOne,
  getAll, filterSearch
} = BusinessController;

const { BusinessValidator, auth } = validators;
const { getOneBusiness, businessValidator } = BusinessValidator;

// Create an instance of the exprees router
const businessRouter = express.Router();

businessRouter.post('/businesses', businessValidator, auth.verifyToken, registerBusiness);
businessRouter.put('/businesses/:businessId', businessValidator, getOneBusiness, updateBusiness);
businessRouter.delete('/businesses/:businessId', getOneBusiness, deleteBusiness);
businessRouter.get('/businesses/:businessId', getOneBusiness, getOne);
businessRouter.get('/businesses', filterSearch, getAll);

export default businessRouter;
