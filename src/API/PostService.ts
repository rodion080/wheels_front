import axios from 'axios';
import config from '../config/config.json';

export default class UserService {
  static async root() {
    const address = `${config.SERVER_ADDRESS}users`;
    const rootResponse = await axios.get(address);
    return rootResponse;
  }
}
