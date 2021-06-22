import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Coffee from '../lib/models/Coffee.js';


describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a cup of coffee via POST', async () => {
    const res = await request(app)
      .post('/api/v1/coffees')
      .send({
        quantity: 1
      });
    expect(res.body).toEqual({
      id: 1,
      quantity: 1
    });
  });
});
