import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { LoginModalState, LoginModalTypes } from '../type/login';

export type LangThunk = ThunkAction<
    void,
    LoginModalState,
    null,
    Action<string>
    >;

// eslint-disable-next-line no-unused-vars
// export type FSetLangType = (lang:LoginModalTypes) => Dispatch;

// eslint-disable-next-line max-len
export const openLogin: ActionCreator<LangThunk> = () => (dispatch: Dispatch): Action => dispatch({
  type: LoginModalTypes.OPEN_LOGIN,
});

// eslint-disable-next-line max-len
export const openRegister: ActionCreator<LangThunk> = () => (dispatch: Dispatch): Action => dispatch({
  type: LoginModalTypes.OPEN_REGISTER,
});

export const closeModal: ActionCreator<LangThunk> = () => (dispatch: Dispatch): Action => dispatch({
  type: LoginModalTypes.CLOSE_ALL,
});
// eslint-disable-next-line max-len
export const setRegForm: ActionCreator<LangThunk> = (item) => (dispatch: Dispatch): Action => dispatch({
  type: LoginModalTypes.SET_REG_FORM,
  payload: item,
});
// eslint-disable-next-line max-len
export const setLogForm: ActionCreator<LangThunk> = (item) => (dispatch: Dispatch): Action => dispatch({
  type: LoginModalTypes.SET_LOG_FORM,
  payload: item,
});
