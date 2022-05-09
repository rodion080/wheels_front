export enum AccountTypes {
    // eslint-disable-next-line no-unused-vars
    FETCH_ACCOUNT = 'FETCH_ACCOUNT',
    // eslint-disable-next-line no-unused-vars
    FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS',
    // eslint-disable-next-line no-unused-vars
    FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR',
    // eslint-disable-next-line no-unused-vars
    SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA'
}

interface AccountLocalDataType {
    login: string,
    email: string,
    file: null | File
    sketchAvatar: string | null
}

export interface AccountDataType {
    createdAt:string,
    email:string,
    fileHub:{},
    id:number|null,
    login:string,
    uuid:string,
    url:string | null,
    file?:string | File,
    description:string,
    accountLocalData:AccountLocalDataType,
    removeAvatar?:boolean,
}

export interface AccountState {
    loading:boolean,
    error:null|string,
    accountData:AccountDataType,
}

interface FetchAccountAction {
    type: AccountTypes.FETCH_ACCOUNT;
}

interface SuccessAccountAction {
    type: AccountTypes.FETCH_ACCOUNT_SUCCESS;
    payload: AccountDataType ;
}

interface ErrorAccountAction {
    type: AccountTypes.FETCH_ACCOUNT_ERROR;
    payload: string ;
}

interface SetAccountAction {
    type: AccountTypes.SET_ACCOUNT_DATA;
    payload: AccountDataType ;
}

// eslint-disable-next-line max-len
export type AccountAction = FetchAccountAction | SuccessAccountAction | ErrorAccountAction | SetAccountAction
