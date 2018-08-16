import express from 'express';
import controllers from '../controllers';
import validators from '../middlewares';

const { UserController } = controllers;
const { signUp, login } = UserController;

const { UserValidator } = validators;
const { signUpValidator, loginValidator } = UserValidator;

// Create an instance of the Router object
const userRouter = express.Router();

userRouter.post('/auth/signup', signUpValidator, signUp);
userRouter.post('/auth/login', loginValidator, login);


export default userRouter;
