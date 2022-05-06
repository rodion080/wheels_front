import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

// eslint-disable-next-line import/prefer-default-export
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
