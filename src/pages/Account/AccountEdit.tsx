import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Input from '../../components/UI/input/Input';
import { toBase64 } from '../../utils';
import Noavatar from '../../components/UI/noavatar/Noavatar';

const AccountEdit = () => {
  const { id } = useParams();
  const { loading, accountData, error } = useTypedSelector((state) => state.account);
  const { fetchAccount, setAccount, updateAccount } = useActions();
  console.log('id', id);

  useMemo(() => {
    if (!accountData.id) {
      fetchAccount(localStorage.getItem('userId'));
    }
  }, [accountData]);

  const setAvatarOnFront = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const sketchAvatar = await toBase64(e.target.files[0]);

    setAccount({
      ...accountData,
      accountLocalData: {
        ...accountData.accountLocalData,
        file: e.target.files[0],
        sketchAvatar,
      },
    });
  };

  const removeAvatarOnFront = async () => {
    setAccount({
      ...accountData,
      accountLocalData: {
        ...accountData.accountLocalData,
        sketchAvatar: null,
      },
    });
  };

  const saveAccountData = async (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { file } = accountData.accountLocalData;
    let body;
    if (file) {
      body = { ...accountData, file };
    } else {
      body = { ...accountData };
    }
    updateAccount(body);
  };

  // TODO make limits for login and email

  return (
    <div className="account-edit">
      {loading
        ? <h1>Loading</h1>
        : <div className="container__wrapper account-edit">
          <div className="account-edit-wrapper">
            <div className="account__left-wrapper">
              <div className="account-edit__main-card_small">
                {accountData.url
                  ? <img src={accountData.url} />
                  : <Noavatar className='no-avatar-small' />}
                <div className="account-edit__main-card-wrapper">
                  <h1>{accountData.accountLocalData.login}</h1>
                  <span>{accountData.accountLocalData.email} </span>
                </div>
              </div>
            </div>
            <div className="account__right-wrapper">
              <div className="account-edit__description">
                <h1>Personal data</h1>

                <div className="account-edit__photo">
                  {accountData.accountLocalData.sketchAvatar
                    ? <img src={accountData.accountLocalData.sketchAvatar} />
                    : <Noavatar className="no-avatar-large" />}

                  <div className="account-edit__photo-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur explicabo quidem!</div>
                  <div className="account-edit__photo-button-wrapper">

                    <label className="g-button-1">
                        Upload
                      <input
                        accept="image/*"
                        onChange={(e) => setAvatarOnFront(e)}
                        name="myFile" style={{
                          display: 'none',
                        }} type="file" />
                    </label>
                    <button
                      onClick={() => removeAvatarOnFront()}
                      className="g-button-2">
                        Delete
                    </button>
                  </div>
                </div>

                <form className="account-edit-log">
                  <label>
                      Login
                    <br/>
                    <Input
                      value={accountData.login}
                      onChange={(e) => setAccount({
                        ...accountData, login: e.target.value,
                      })}
                      placeholder="login"
                      type="text"
                    />
                  </label>
                  <label>
                      Email
                    <br/>
                    <Input
                      value={accountData.email}
                      onChange={(e) => setAccount({
                        ...accountData, email: e.target.value,
                      })}
                      placeholder="email"
                      type="text"
                    />

                  </label>
                  <label>
                      Description
                    <br/>
                    <textarea
                      value={accountData.description}
                      onChange={(e) => setAccount({
                        ...accountData, description: e.target.value,
                      })}
                      rows="10" cols="45" name="text"></textarea>
                  </label>
                  <button
                    onClick={(e) => saveAccountData(e)}
                    className="g-button-1">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
      {
        error ? <h1>{error}</h1> : null
      }

    </div>

  );
};

export default AccountEdit;
