import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Noavatar from '../../components/UI/noavatar/Noavatar';
import { NavActive, TypeInitAccountMode } from '../../types/Account';
import { AbsInterface, staticImplements } from '../../utils/staticInheritance';
import PartJourneysTSX from './AccountMenu/PartJourneys/PartJourneys';
import AdminJourneysTSX from './AccountMenu/AdminJourneys/AdminJourneys';
import AdminTSX from './AccountMenu/Admin/Admin';
import './Account.scss';

const initAccountMode : TypeInitAccountMode = NavActive.PART_JOURNEYS;

interface MainAccount{
  new():AbsInterface;
  getHeading():ReactElement;
  getContent():ReactElement;
}

@staticImplements<MainAccount>()
class PartJourneys {
  static getHeading(): React.ReactElement {
    return <h1>Journeys</h1>;
  }

  static getContent(): React.ReactElement {
    return <PartJourneysTSX />;
  }
}
@staticImplements<MainAccount>()
class AdminJourneys {
  static getHeading() {
    return <h1>ADMIN_JOURNEYS</h1>;
  }

  static getContent() {
    return <AdminJourneysTSX />;
  }
}

@staticImplements<MainAccount>()
class Admin {
  public static getHeading() {
    return <h1>ADMIN</h1>;
  }

  public static getContent() {
    return <AdminTSX />;
  }
}

const contentNav = {
  [NavActive.PART_JOURNEYS]: PartJourneys,
  [NavActive.ADMIN_JOURNEYS]: AdminJourneys,
  [NavActive.ADMIN]: Admin,
};

const Account = () => {
  const { loading, accountData, error } = useTypedSelector((state) => state.account);
  const { fetchAccount } = useActions();
  const [accountMode, setAccountMode] = useState<TypeInitAccountMode>(initAccountMode);
  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(true);
  console.log(setUserIsAdmin);

  useEffect(() => {
    fetchAccount(localStorage.getItem('userId'));
  }, [initAccountMode]);
  return (
    <div className="account">
      <div className="container__wrapper account">
        {
          loading ? <h1>Loading</h1> // TODO Loading
            : <div className="account-wrapper">
              <div className="account__left-wrapper">
                <div className="account__main-card">
                  {/* <img src={accountData.url} alt=""/> */}
                  {accountData.url
                    ? <img src={accountData.url} />
                    : <Noavatar className='no-avatar-large' />}
                  <h1>{accountData.login}</h1>
                  <div>{accountData.email}</div>
                  <span>In Wheel's hub since</span>
                  <span>
                    {new Date(accountData.createdAt).getDate()}.
                    {new Date(accountData.createdAt).getMonth()}.
                    {new Date(accountData.createdAt).getFullYear()}
                  </span>
                  <Link
                    className="g-link"
                    to={`/account/${accountData.id}/edit`}>
                      Edit
                  </Link>

                </div>
                <nav className="account__nav">
                  <ul>
                    <li
                      onClick={() => setAccountMode(NavActive.PART_JOURNEYS)}
                      className={accountMode === NavActive.PART_JOURNEYS ? 'account__nav-item active' : 'account__nav-item'}>
                      Part journeys
                    </li>
                    <li
                      onClick={() => setAccountMode(NavActive.ADMIN_JOURNEYS)}
                      className={accountMode === NavActive.ADMIN_JOURNEYS ? 'account__nav-item active' : 'account__nav-item'} >
                      Admin journeys
                    </li>
                    {
                      userIsAdmin ? <li
                        onClick={() => setAccountMode(NavActive.ADMIN)}
                        className={accountMode === NavActive.ADMIN ? 'account__nav-item active' : 'account__nav-item'} >
                        Admen
                      </li>
                        : null
                    }

                  </ul>
                </nav>
              </div>
              <div className="account__right-wrapper">
                <div className="account__description">
                  <div>
                    <h1>About</h1>
                  </div>
                  <span>
                    {accountData.description}
                  </span>
                </div>
                <div className="account__events">
                  {contentNav[accountMode].getHeading()}
                  {contentNav[accountMode].getContent()}

                </div>
              </div>
            </div>
        }
        {
          error ? <h1>{error.message}</h1> : null
        }
      </div>
    </div>
  );
};

export default Account;
