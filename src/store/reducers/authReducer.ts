import { AuthAction, AuthTypes, AuthState } from '../type/auth';

const initilState: AuthState = {
  isAuth: !!localStorage.getItem('auth'),
  token: null,
};

export const authReducer = (state: AuthState = initilState, action: AuthAction): AuthState => {
  switch (action.type) {
  case AuthTypes.FETCH_AUTH_SUCCESS:
    return { isAuth: action.payload.isAuth, token: action.payload.token };
  default:
    return state;
  }
};
