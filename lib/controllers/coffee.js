import { Router } from 'express';
import Coffee from '../models/Coffee';
import CoffeeService from '../services/CoffeeService';

export default Router()
  .post('/api/v1/coffees', async (req, res, next) => {
    try {
      const coffee = await CoffeeService.create(req.body);
      res.send(coffee);
    } catch(err) {
      next(err);
    }
  });
