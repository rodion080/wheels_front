import { LangAction, LanguagesTypes, LangState } from '../type/lang';

const initilState: LangState = {
  language: LanguagesTypes.EN,
  langSelectOpen: false,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const langReducer = (state: LangState = initilState, action: LangAction): LangState => {
  switch (action.type) {
  case LanguagesTypes.RU:
    return { language: LanguagesTypes.RU, langSelectOpen: false };
  case LanguagesTypes.DE:
    return { language: LanguagesTypes.DE, langSelectOpen: false };
  case LanguagesTypes.EN:
    return { language: LanguagesTypes.EN, langSelectOpen: false };
  case LanguagesTypes.EDIT:
    return { ...state, langSelectOpen: true };
  default:
    return state;
  }
};
