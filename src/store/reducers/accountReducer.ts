import {
  AccountAction, AccountTypes, AccountState,
} from '../type/account';

const initAccountLocalData = {
  login: '',
  email: '',
  file: null,
  sketchAvatar: null,
};

const initilState: AccountState = {
  loading: false,
  error: null,
  accountData: {
    createdAt: '',
    email: '',
    file: '',
    fileHub: {},
    id: null,
    login: '',
    url: '',
    description: '',
    accountLocalData: initAccountLocalData,
  },
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const accountReducer = (state: AccountState = initilState, action: AccountAction): AccountState => {
  switch (action.type) {
  case AccountTypes.FETCH_ACCOUNT:
    return {
      ...state, loading: true,
    };
  case AccountTypes.FETCH_ACCOUNT_SUCCESS:
    return {
      ...state, loading: false, accountData: action.payload, error: null,
    };
  case AccountTypes.FETCH_ACCOUNT_ERROR:
    return {
      ...state, loading: false, error: action.payload,
    };
  case AccountTypes.SET_ACCOUNT_DATA:
    return {
      ...state, accountData: action.payload,
    };
  default:
    return state;
  }
};
