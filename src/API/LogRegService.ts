import axios from 'axios';
import config from '../config/config.json';
import { logFormType, regFormType } from '../store/type/login';

export default class LogRegService {
  static async login(logForm: logFormType) {
    const address = `${config.SERVER_ADDRESS}users/login`;
    const data = { loginOrEmail: logForm.logMail, password: logForm.password };
    return (axios.post(address, data));
  }

  static async register(regForm: regFormType) {
    const address = `${config.SERVER_ADDRESS}users/create`;
    const data = { login: regForm.login, email: regForm.email, password: regForm.password };
    return (axios.post(address, data));
  }

}
