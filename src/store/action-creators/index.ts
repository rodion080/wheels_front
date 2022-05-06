import * as MainActionCreators from './main';
import * as AuthActionCreators from './auth';
import * as LangActionCreators from './lang';
import * as LoginModalActionCreators from './login';
import * as AccountActionCreators from './account';

export default {
  ...MainActionCreators,
  ...AuthActionCreators,
  ...LangActionCreators,
  ...LoginModalActionCreators,
  ...AccountActionCreators,
};
