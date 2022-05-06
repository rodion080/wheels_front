import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { LangState, LangTypes } from '../type/lang';

export type LangThunk = ThunkAction<
    void,
    LangState,
    null,
    Action<string>
    >;

// eslint-disable-next-line no-unused-vars
export type FSetLangType = (lang:LangTypes) => Dispatch;

// eslint-disable-next-line max-len
export const setLang: ActionCreator<LangThunk> = (lang:LangTypes) => (dispatch: Dispatch): Action => dispatch({
  type: lang,
});
