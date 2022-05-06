import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  // AuthAction,
  AuthTypes, AuthState,
} from '../type/auth';
// import { LoginModalTypes } from '../type/login';
import { LangThunk } from './login';

export type AuthThunk = ThunkAction<
    void,
    AuthState,
    null,
    Action<string>
    >;

// eslint-disable-next-line max-len
export const setIsAuth: ActionCreator<LangThunk> = (item) => (dispatch: Dispatch): Action => dispatch({
  type: AuthTypes.FETCH_AUTH_SUCCESS,
  payload: item,
});
