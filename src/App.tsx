import React, { useEffect } from 'react';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useTypedSelector } from './hooks/useTypedSelector';
import { locales } from './utils';

import { LanguageContext } from './context';
import LogReg from './components/LogReg/LogReg';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import Basement from './components/Basement/Basement';
// import ChatService from './API/ChatService';
// import {fetchAuth} from "./store/action-creators/auth";

const App = () => {
  const { language } = useTypedSelector((state) => state.lang);
  const { setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth({ isAuth: true, token: localStorage.getItem('token') });
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        langDict: locales[language],
      }}
    >
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <AppRouter/>
            <Basement />
          </div>
        </BrowserRouter>
        <LogReg/>
      </div>
    </LanguageContext.Provider>
  );
};
export default App;
