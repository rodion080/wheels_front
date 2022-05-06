import React, { useContext } from 'react';
import Modal from '../UI/modal/Modal';
import Input from '../UI/input/Input';
import LinkButton from '../UI/button/LinkButton';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LanguageContext } from '../../context';
import { regValidate } from '../../utils/logReg';
import LogRegService from '../../API/LogRegService';

const LogReg = () => {
  const { langDict } = useContext(LanguageContext);

  const {
    openLogin: openLoginBool, openRegister: openRegisterBool, regForm, logForm,
  } = useTypedSelector((state) => state.loginModal);

  const {
    openLogin, closeModal, setRegForm, setLogForm, setIsAuth,
  } = useActions();

  const clearForms = () => {
    setRegForm({
      login: '', email: '', password: '', confPassword: '', warning: '',
    });
    setLogForm({ logMail: '', password: '', warning: '' });
  };

  const closeModalWindow = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    closeModal();
    clearForms();
  };

  const login = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const registerResult = await LogRegService.login(logForm);
      closeModal();
      clearForms();
      localStorage.setItem('auth', 'true');
      localStorage.setItem('token', registerResult.data.token);
      localStorage.setItem('userId', registerResult.data.id);
      setIsAuth({ isAuth: true, token: localStorage.getItem('token') });
    } catch (e) {
      setLogForm({ ...regForm, warning: e.response.data.message });
    }
  };

  const register = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const regIsValid = regValidate(regForm);
    if (!regIsValid.valid) {
      setRegForm({ ...regForm, warning: regIsValid.messages.join(', ') });
      return;
    }

    try {
      const registerResult = await LogRegService.register(regForm);
      closeModal();
      clearForms();
      localStorage.setItem('auth', 'true');
      localStorage.setItem('token', registerResult.data.token);
      setIsAuth({ isAuth: true, token: localStorage.getItem('token') });
    } catch (e) {
      setRegForm({ ...regForm, warning: e.response.data.message });
    }

  };

  return (
    <div>
      <Modal
        onClick={(e) => closeModalWindow(e)}
        active={openRegisterBool}
      >
        {langDict.registerFormHead}
        <label>
          {langDict.loginForm}
          <br/>
          <Input
            value={regForm.login}
            onChange={(e: { target: { value: any; }; }) => setRegForm({ ...regForm, login: e.target.value })}
            placeholder={langDict.loginForm}
            type="text"
          />
        </label>
        <label>
          {langDict.emailForm}
          <br/>
          <Input
            value={regForm.email}
            onChange={(e: { target: { value: any; }; }) => setRegForm({ ...regForm, email: e.target.value })}
            placeholder={langDict.emailForm}
            type="text"
          />
        </label>
        <label>
          {langDict.pass}
          <br/>
          <Input
            value={regForm.password}
            onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
            placeholder={langDict.pass}
            type="password"
          />
        </label>
        <label>
          {langDict.confPass}
          <br/>
          <Input
            value={regForm.confPassword}
            onChange={(e) => setRegForm({ ...regForm, confPassword: e.target.value })}
            placeholder={langDict.confPass}
            type="password"
          />
        </label>
        <span>{regForm.warning}</span>
        <LinkButton
          onClick={(e) => register(e)}
        >
          {langDict.regButton}
        </LinkButton>
        <span>{langDict.regQuestion}</span> <a onClick={openLogin}>{langDict.logInLinkName}</a>
      </Modal>

      <Modal
        onClick={(e) => closeModalWindow(e)}
        active={openLoginBool}
      >
        {langDict.loginFormHead}
        <label>
          {langDict.emailForm}
          <br/>
          <Input
            value={logForm.logMail}
            onChange={(e) => setLogForm({ ...logForm, logMail: e.target.value })}
            placeholder={langDict.emailForm}
            type="text"
          />
        </label>
        <label>
          {langDict.pass}
          <br/>
          <Input
            value={logForm.password}
            onChange={(e) => setLogForm({ ...logForm, password: e.target.value })}
            placeholder={langDict.pass}
            type="password"
          />
        </label>
        <span>{logForm.warning}</span>
        <LinkButton
          onClick={(e) => login(e)}
        >
          {langDict.logInLinkName}
        </LinkButton>
      </Modal>
    </div>
  );
};

export default LogReg;
