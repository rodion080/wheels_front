export interface AuthState {
    isAuth: boolean;
    token: string | null;
}

export enum AuthTypes {
    // eslint-disable-next-line no-unused-vars
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    // eslint-disable-next-line no-unused-vars
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
}

interface FetchAuthSuccessAction {
    type: AuthTypes.FETCH_AUTH_SUCCESS;
    payload: string;
}

export type AuthAction = FetchAuthSuccessAction
