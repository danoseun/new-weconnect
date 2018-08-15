import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { UserController } = controllers;
const { signUp } = UserController;

const { UserValidator } = validators;
const { signUpValidator } = UserValidator;

// Create an instance of the Router object
const userRouter = express.Router();

userRouter.post('/auth/signup', signUpValidator, signUp);


export default userRouter;
