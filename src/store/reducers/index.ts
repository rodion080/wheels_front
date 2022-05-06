import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { authReducer } from './authReducer';
import { langReducer } from './langReducer';
import { loginModalReducer } from './loginModalReducer';
import { accountReducer } from './accountReducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  auth: authReducer,
  lang: langReducer,
  loginModal: loginModalReducer,
  account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>
