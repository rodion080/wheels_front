import React from 'react';
import { Link } from 'react-router-dom';

const PartJourneysTSX = (): React.ReactElement => {
  console.log(1);
  console.log(localStorage.getItem('userId'));

  return (
    <>
      {false
        ? <div className="account__empty_events">There are no any PartJourneys yet</div>
        : <>
          <div className="account__event">
            <Link className="account__event-heading" to="/account" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, inventore.
            </Link>
            <span className="account__event-date" >05.05.2022</span>
            <button className="g-button-1">Leave</button>
          </div>
        </>}
    </>
  );
};

export default PartJourneysTSX;
