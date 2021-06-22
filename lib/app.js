import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import coffeeController from '../lib/controllers/coffee.js';

const app = express();

app.use(express.json());

if (app) {
  console.log('hi');
}

app.use(coffeeController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
