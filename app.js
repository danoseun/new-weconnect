import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './server/routes';

const {
  userRouter, businessRouter, reviewRouter, defaultRouter
} = router;

// Create an instance of express
const app = express();

// logs requests to the console
app.use(logger('dev'));

// Parse incoming data from request object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Tell express to use the following paths in the application
app.use('/api/v1', userRouter);
app.use('/api/v1', businessRouter);
app.use('/api/v1', reviewRouter);
app.use('/', defaultRouter);

const port = process.env.PORT || 3300;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is live on PORT: ${port}`);
});

export default app;
