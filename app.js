import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Create an instance of express
const app = express();

// logs requests to the console
app.use(logger('dev'));

// Parse incoming data from request object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Server is live on PORT: ${port}`);
});

export default app;
