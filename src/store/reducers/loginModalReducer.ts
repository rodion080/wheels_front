import { ModalTypes, LoginModalTypes, LoginModalState } from '../type/login';

const initilState: LoginModalState = {
  openRegister: false,
  openLogin: false,
  regForm: {
    login: '', email: '', password: '', confPassword: '', warning: '',
  },
  logForm: { logMail: '', password: '', warning: '' },
};
// eslint-disable-next-line import/prefer-default-export,default-param-last,max-len
export const loginModalReducer = (state: LoginModalState = initilState, action: ModalTypes): LoginModalState => {
  switch (action.type) {
  case LoginModalTypes.CLOSE_ALL:
    return { ...state, openRegister: false, openLogin: false };
  case LoginModalTypes.OPEN_LOGIN:
    return { ...state, openRegister: false, openLogin: true };
  case LoginModalTypes.OPEN_REGISTER:
    return { ...state, openRegister: true, openLogin: false };
  case LoginModalTypes.SET_REG_FORM:
    return { ...state, regForm: action.payload };
  case LoginModalTypes.SET_LOG_FORM:
    return { ...state, logForm: action.payload };
  default:
    return state;
  }
};
