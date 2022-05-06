export enum LoginModalTypes {
    // eslint-disable-next-line no-unused-vars
    CLOSE_ALL = 'LOGIN_MODAL_CLOSE_ALL',
    // eslint-disable-next-line no-unused-vars
    OPEN_LOGIN = 'OPEN_LOGIN',
    // eslint-disable-next-line no-unused-vars
    OPEN_REGISTER = 'OPEN_REGISTER',
    // eslint-disable-next-line no-unused-vars
    SET_REG_FORM = 'SET_REG_FORM',
    // eslint-disable-next-line no-unused-vars
    SET_LOG_FORM = 'SET_LOG_FORM',
}

export type logFormType = {
    logMail: string,
    password: string,
    warning: string
}

export type regFormType = {
    login: string,
    email: string,
    password: string,
    confPassword: string,
    warning: string,
}

export interface LoginModalState {
    openRegister: boolean;
    openLogin: boolean;
    logForm: logFormType;
    regForm: regFormType;
}

export interface CloseAllModalAction {
    type: LoginModalTypes.CLOSE_ALL;
}

export interface OpenLoginModalAction {
    type: LoginModalTypes.OPEN_LOGIN;
}

export interface OpenRegisterModalAction {
    type: LoginModalTypes.OPEN_REGISTER;
}

export interface LoginAction {
    type: LoginModalTypes.SET_LOG_FORM;
}

export interface RegisterAction {
    type: LoginModalTypes.SET_REG_FORM;
}

// eslint-disable-next-line max-len
export type ModalTypes = CloseAllModalAction| OpenLoginModalAction | OpenRegisterModalAction | LoginAction | RegisterAction

//
// export type LangAction = RuLangAction | DeLangAction | EnLangAction
// export type LangTypes = LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE
