import pool from '../utils/pool.js';

export default class Coffee {
  id;
  quantity;

  constructor(row) {
    this.id = Number(row.id);
    this.quantity = row.quantity;
  }

  static async insert({ quantity }) {
    const { rows } = await pool.query(
      'INSERT INTO coffees (quantity) VALUES ($1) RETURNING *',
      [quantity]
    );

    return new Coffee(rows[0]);
  }
}
