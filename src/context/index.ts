import { createContext } from 'react';
import en from '../locales/en.json';

type LanguageContextProps = {
    langDict: typeof en
}
export const LanguageContext = createContext<LanguageContextProps>({ langDict: en });
