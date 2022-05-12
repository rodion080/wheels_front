import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../../../../hooks/useFetch';
import JourneysService from '../../../../API/JourneysService';

interface IPartJourneyList{
  journeys:any[],
  overallJourneys:number,
  currentPage:number,
  journeysPerPage:number,
}

const partJourneysInitial : IPartJourneyList = {
  journeys: [],
  overallJourneys: 0,
  currentPage: 1,
  journeysPerPage: 10,
};

const PartJourneysTSX = (): React.ReactElement => {
  // TODO think if possible to use a pagination from here

  // console.log('partJourneysInitial', partJourneysInitial);
  // const [partJourneys, setPartJourneys] = useState(2);
  // eslint-disable-next-line no-unused-vars
  const [partJourneys, setPartJourneys] = useState<IPartJourneyList>(partJourneysInitial);
  // eslint-disable-next-line no-unused-vars
  const [fetchJourneys, isPostLoading, postError] = useFetching(async () => {
    const userId = Number(localStorage.getItem('userId'));
    const resJourneys = await JourneysService.getJourneysByUserId(userId, partJourneys.currentPage);
    const { journeys, overallNumber: overallJourneys } = resJourneys.data;
    setPartJourneys({ ...partJourneys, journeys, overallJourneys });
  });

  useEffect(() => {
    (async () => {
      await fetchJourneys();
    })();

  }, [partJourneys.currentPage]);

  return (
    <>
      {!partJourneys.journeys.length
        ? <div className="account__empty_events">There are no any PartJourneys yet </div>
        : <>
          <div className="account__events-wrapper" >
            {
              partJourneys.journeys.map((journey) => (
                <div key={journey.id} className="account__event">
                  <Link className="account__event-heading" to={`/journeyInfo/${journey.id}`} >
                    {journey.heading}
                  </Link>
                  <span className="account__event-date" >{
                    `${new Date(journey.date).getDate()}.${new Date(journey.date).getUTCMonth()}.${new Date(journey.date).getFullYear()}`
                  }</span>
                  <button className="g-button-1">Leave</button>
                </div>
              ))
            }

          </div>
          {
            partJourneys.overallJourneys === partJourneys.journeys.length
              ? null
              : <div className="g-pag">
                {[...Array(Math.ceil(partJourneys.overallJourneys / partJourneys.journeysPerPage))]
                  .map((e, i) => <div
                    className={ i + 1 === partJourneys.currentPage ? 'g-pag__button active' : 'g-pag__button' }
                    onClick={() => setPartJourneys({ ...partJourneys, currentPage: i + 1 })}
                    key={i}>
                    {i + 1}
                  </div>)
                }</div>
          }
        </>}
    </>
  );
};

export default PartJourneysTSX;
