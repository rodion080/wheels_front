import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  AccountAction, AccountDataType, AccountState, AccountTypes,
} from '../type/account';
import config from '../../config/config.json';
import { LangThunk } from './login';
import AccountService from '../../API/AccountService';

export type AuthThunk = ThunkAction<
    void,
    AccountState,
    null,
    Action<string>
    >;

// eslint-disable-next-line max-len
export const fetchAccount: ActionCreator<LangThunk> = (userId:number) => async (dispatch: Dispatch<AccountAction>) => {
  try {
    dispatch({
      type: AccountTypes.FETCH_ACCOUNT,
    });
    const response = await AccountService.getAccountData(Number(userId));
    let url = null;
    let uuid = null;
    if (response.data.fileHub) {
      if (response.data.fileHub.files.length) {
        url = `${config.SERVER_ADDRESS}files/image/${response.data.fileHub.files[0].uuid}`;
        uuid = response.data.fileHub.files[0].uuid;
      }
    }

    dispatch({
      type: AccountTypes.FETCH_ACCOUNT_SUCCESS,
      payload: {
        ...response.data,
        url,
        uuid,
        accountLocalData: {
          login: response.data.login,
          email: response.data.email,
          file: null,
          sketchAvatar: url,
        },
      },
    });
  } catch (e) {
    // @ts-ignore
    dispatch({
      type: AccountTypes.FETCH_ACCOUNT_ERROR,
      payload: e.message,
    });
  }
};

export const updateAccount: ActionCreator<LangThunk> = (data:AccountDataType) => async (dispatch: Dispatch<AccountAction>) => {
  try {
    const response = await AccountService.setAccountData(data);
    if (response.status === 200) {
      // sketchAvatar
      // console.log('data.accountLocalData.sketchAvatar', data.accountLocalData.sketchAvatar);
      if (data.accountLocalData.sketchAvatar) {
        if ('file' in data) {
          if (data.url) {
            await AccountService.updateAvatar(data.file, data.id);
          } else {
            await AccountService.uploadAvatar(data.file, data.id);
          }
        }
      } else {
        await AccountService.removeAvatar(data.uuid);
      }

      dispatch({
        type: AccountTypes.FETCH_ACCOUNT,
      });
      const response = await AccountService.getAccountData(Number(localStorage.getItem('userId')));
      let url = null;
      let uuid = null;
      if (response.data.fileHub) {
        if (response.data.fileHub.files.length) {
          url = `${config.SERVER_ADDRESS}files/image/${response.data.fileHub.files[0].uuid}`;
          uuid = response.data.fileHub.files[0].uuid;
        }
      }

      dispatch({
        type: AccountTypes.FETCH_ACCOUNT_SUCCESS,
        payload: {
          ...response.data,
          url,
          uuid,
          accountLocalData: {
            login: response.data.login,
            email: response.data.email,
            file: null,
            sketchAvatar: url,
          },
        },
      });
    }
  } catch (e) {
    // @ts-ignore
    dispatch({
      type: AccountTypes.FETCH_ACCOUNT_ERROR,
      payload: e.message,
    });
  }
};

export const setAccount: ActionCreator<LangThunk> = (accountData) => async (dispatch: Dispatch<AccountAction>) => {
  dispatch({
    type: AccountTypes.SET_ACCOUNT_DATA,
    payload: accountData,
  });
};
