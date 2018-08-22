import express from 'express';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => res.status(200).json({
  message: 'WElcome to Weconnect!'
}));

defaultRouter.all('*', (req, res) => res.status(404).json({
  message: 'Sorry, page not found'
}));

export default defaultRouter;
/**
 * I think it's better to use export default when
 * you are importing something that has many things in it into one file
 * Like a class, while export is better when you are importing something
 * that will go into different files
 */
