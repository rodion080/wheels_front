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

  static async updateAccount(body:AccountDataType) {
    const address = `${config.SERVER_ADDRESS}users/update2`;
    const formData = new FormData();
    formData.append('userId', body.id);
    formData.append('login', body.login);
    formData.append('email', body.email);
    formData.append('description', body.description);
    const { file } = body;
    const notRemoveAvatar = body.accountLocalData.sketchAvatar;
    if (notRemoveAvatar) {
      formData.append('notRemoveAvatar', notRemoveAvatar);
    }
    if (file) {
      formData.append('image', file);
    }

    const response = await axios.patch(address, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: LocalStorageUtil.getHeadingWithToken(),
      },

    });
    return response;
  }

}
