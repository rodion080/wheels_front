export enum LanguagesTypes {
    // eslint-disable-next-line no-unused-vars
    RU = 'RU',
    // eslint-disable-next-line no-unused-vars
    EN = 'EN',
    // eslint-disable-next-line no-unused-vars
    DE = 'DE',
}

export interface basicUserState {
    isAuth:boolean;
    language:LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE
}
