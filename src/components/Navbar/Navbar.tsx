import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../UI/button/LinkButton';
import { LangTypes, LanguagesTypes } from '../../store/type/lang';
import { LanguageContext } from '../../context';
import { langImages } from '../../utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Navbar = () => {
  const { langDict } = useContext(LanguageContext);
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { language: lang, langSelectOpen } = useTypedSelector((state) => state.lang);
  const { setLang, openRegister, setIsAuth } = useActions();

  const langSelect = (selectedLang: LangTypes) => {
    setLang(selectedLang);
  };

  const logOut = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    setIsAuth({ isAuth: false, token: '' });
  };

  const langData = {
    langImg: langImages[lang],
    langName: lang,
  };

  return (
    <div className="nav">
      <ul className="nav__list-right">
        <div className="container__wrapper">
          {
            isAuth
              ? <li className="nav__item">
                <LinkButton onClick={() => logOut()} >
                  <span>{langDict.accountExit}</span>
                </LinkButton>
              </li>
              : <li className="nav__item">
                <LinkButton
                  onClick={openRegister}
                >
                  <span>{langDict.login}</span>
                </LinkButton>
              </li>
          }
          {
            localStorage.getItem('auth')
              ? <li className="nav__item">
                <Link to="/account" className='nav__item-link-button '>
                  {langDict.account}
                </Link>
              </li>
              : null
          }
          <li style={{ marginRight: '63px' }}>
          </li>
          <li>
            {
              langSelectOpen
                ? <ul className="nav__langs">
                  <li className="nav__item" >
                    <LinkButton
                      selected={lang === LanguagesTypes.EN}
                      onClick={() => langSelect(LanguagesTypes.EN)}
                      image={langImages[LanguagesTypes.EN]}>
                      <span>EN</span>
                    </LinkButton>
                  </li>
                  <li className="nav__item">
                    <LinkButton
                      selected={lang === LanguagesTypes.DE}
                      onClick={() => langSelect(LanguagesTypes.DE)}
                      image={langImages[LanguagesTypes.DE]}>
                      <span>DE</span>
                    </LinkButton>
                  </li>
                  {/* <li className="nav__item"> */}
                  {/*  <LinkButton */}
                  {/*    selected={lang === LanguagesTypes.RU} */}
                  {/*    onClick={() => langSelect(LanguagesTypes.RU)} */}
                  {/*    image={langImages[LanguagesTypes.RU]}> */}
                  {/*    <span>RU</span> */}
                  {/*  </LinkButton> */}
                  {/* </li> */}
                </ul>
                : <ul className="nav__langs">
                  <li className="nav__item">
                    <LinkButton
                      selected={false}
                      onClick={() => langSelect(LanguagesTypes.EDIT)}
                      image={langData.langImg}>
                      <span>{langData.langName}</span>
                    </LinkButton>
                  </li>
                </ul>
            }
          </li>
        </div>
      </ul>

      <ul className="nav__list-left">
        <div className="container__wrapper">
          <div style={{
            display: 'flex',
            color: 'white',
            fontSize: '20px',
            cursor: 'default',
            paddingLeft: '25px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1>
              Wheel's hub LOGO
            </h1>
          </div>
          <div className="container__wrapper" >
            <li className="nav__item">
              <Link className="nav__link" to="/">
                {langDict.newsLink}
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/map">
                {langDict.mapLink}
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/jlist">
                {langDict.listLink}
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/leaders">
                {langDict.leadRatingLink}
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>

  );
};

export default Navbar;
