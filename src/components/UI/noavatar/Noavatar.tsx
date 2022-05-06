import React from 'react';
import noAvatar from '../../../images/no-avatar.png';

const Noavatar = ({ ...props }:object) => (
  <div
    {...props}
    style={{ backgroundImage: noAvatar }}
  >
    <img src={noAvatar} alt=""/>
  </div>
);

export default Noavatar;
