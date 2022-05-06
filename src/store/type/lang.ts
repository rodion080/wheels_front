export enum LanguagesTypes {
    // eslint-disable-next-line no-unused-vars
    RU = 'RU',
    // eslint-disable-next-line no-unused-vars
    EN = 'EN',
    // eslint-disable-next-line no-unused-vars
    DE = 'DE',
    // eslint-disable-next-line no-unused-vars
    EDIT = 'EDIT'
}

export interface LangState {
    language: LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE ;
    langSelectOpen:boolean;
}

interface RuLangAction {
    type: LanguagesTypes.RU;
}

interface DeLangAction {
    type: LanguagesTypes.DE;
}

interface EnLangAction {
    type: LanguagesTypes.EN;
}

interface EditLangAction {
    type: LanguagesTypes.EDIT;
}

export type LangAction = RuLangAction | DeLangAction | EnLangAction | EditLangAction
// eslint-disable-next-line max-len
export type LangTypes = LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE | LanguagesTypes.EDIT
