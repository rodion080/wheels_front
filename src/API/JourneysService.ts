import axios from 'axios';
import config from '../config/config.json';
import { LocalStorageUtil } from '../utils/LocalStorage';

export default class JourneysService {
  static async getJourneysByUserId(userId:number, pageNum:number = 1, numPerPage:number = 10) {
    // http://localhost:{{PORT}}/journeys/getJourneysByUserId?userId=1&pageNum=1&numPerPage=10
    const address = `${config.SERVER_ADDRESS}journeys/getJourneysByUserId?userId=${userId}&pageNum=${pageNum}&numPerPage=${numPerPage}`;
    const yourConfig = {
      headers: {
        Authorization: LocalStorageUtil.getHeadingWithToken(),
      },
    };
    const result = await axios.get(address, yourConfig);
    return result;

  }
}
