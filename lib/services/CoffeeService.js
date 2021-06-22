import Coffee from '../models/Coffee.js';
import { sendSms } from '../utils/twilio.js';

export default class CoffeeService {
  static async create({ quantity }) {
    const coffee = await Coffee.insert({ quantity });
    await sendSms(
      process.env.RECIPIENT_NUMBER,
      `Someone sent you ${quantity} coffee. Enjoy!`
    );

    return coffee;
  }
}
