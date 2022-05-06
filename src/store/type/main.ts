import { LangTypes } from './lang';

interface Main {
    center: {
        lat: number,
        lng: number,
    },
    zoom: number,
    lang: LangTypes
}

export interface MainState {
    main: Main;
    loading: boolean;
    error: null | string;
}

export enum MainActionTypes {
    // eslint-disable-next-line no-unused-vars
    FETCH_MAIN = 'FETCH_MAIN',
    // eslint-disable-next-line no-unused-vars
    FETCH_MAIN_SUCCESS = 'FETCH_MAIN_SUCCESS',
    // eslint-disable-next-line no-unused-vars
    FETCH_MAIN_ERROR = 'FETCH_MAIN_ERROR',
    // SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchMainAction {
    type: MainActionTypes.FETCH_MAIN;
}

interface FetchMainSuccessAction {
    type: MainActionTypes.FETCH_MAIN_SUCCESS;
    payload: any[];
}

interface FetchMainErrorAction {
    type: MainActionTypes.FETCH_MAIN_ERROR;
    payload: string;
}

// interface SetMainPageAction {
//     type: MainActionTypes.SET_TODO_PAGE;
//     payload: number;
// }

export type MainAction =
    FetchMainAction
    | FetchMainSuccessAction
    | FetchMainErrorAction
    // | SetTodoPageAction
