import { MainAction, MainActionTypes, MainState } from '../type/main';

const initilState: MainState = {
  main: {},
  loading: true,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const mainReducer = (state: MainState = initilState, action: MainAction): MainState => {
  switch (action.type) {
  case MainActionTypes.FETCH_MAIN:
    return { ...state, loading: true };
  case MainActionTypes.FETCH_MAIN_SUCCESS:
    return { ...state, main: action.payload, loading: false };
  case MainActionTypes.FETCH_MAIN_ERROR:
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
  }
};
