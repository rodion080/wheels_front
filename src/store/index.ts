import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, applyMiddleware(thunk));
