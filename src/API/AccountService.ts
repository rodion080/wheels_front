import axios from 'axios';
import config from '../config/config.json';
import { LocalStorageUtil } from '../utils/LocalStorage';
import { AccountDataType } from '../store/type/account';

export default class AccountService {
  static async getAccountData(userId:number) {
    const address = `${config.SERVER_ADDRESS}users/${userId}`;

    const yourConfig = {
      headers: {
        Authorization: LocalStorageUtil.getHeadingWithToken(),
      },
    };
    const result = await axios.get(address, yourConfig);
    return result;
  }

  static async updateAvatar(file:File, userId:number) {
    // http://localhost:{{PORT}}/users/avatarUpload
    const address = `${config.SERVER_ADDRESS}users/avatarUpdate`;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', String(userId));
    const response = await axios.post(address, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: LocalStorageUtil.getHeadingWithToken(),
      },

    });
    return response;
  }

  static async uploadAvatar(file:File, userId:number) {
    const address = `${config.SERVER_ADDRESS}users/avatarUpload`;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', String(userId));
    const response = await axios.post(address, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: LocalStorageUtil.getHeadingWithToken(),
      },
    });
    return response;
  }

  static async removeAvatar(uuid:string) {
    const address = `${config.SERVER_ADDRESS}files/removeFile`;
    const response = await axios.delete(address, {
      headers:
          { Authorization: LocalStorageUtil.getHeadingWithToken() },
      data: { uuid },
    });
    return response;
  }

  static async setAccountData(accountData: AccountDataType) {
    const address = `${config.SERVER_ADDRESS}users/update`;

    const body = {
      userId: accountData.id,
      login: accountData.login,
      email: accountData.email,
      description: accountData.description,
    };

    const configToSend = {
      headers: { Authorization: LocalStorageUtil.getHeadingWithToken() },
    };
    const result = await axios.patch(address, body, configToSend);
    return result;
  }
}
