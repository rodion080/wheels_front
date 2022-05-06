import React, { useEffect, useState } from 'react';
// import imm from '../../../images/de.jpg';
const images = require.context('../../../images', true);
const LastJourneys = () => {

  const journeys = [
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '1Lorem ipsum dolor sit amet',
    },
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '1Lorem ipsum dolor sit amet',
    },
    {
      text: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '2Lorem ipsum dolor sit amet',
    },
    {
      text: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '2Lorem ipsum dolor sit amet',
    },
    {
      text: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '3Lorem ipsum dolor sit amet',
    },
    {
      text: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur'
          + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur',
      heading: '3Lorem ipsum dolor sit amet',
    },
  ];
  const [sliderJourneysState, setSliderJourneysState] = useState({ cardsNumber: journeys.length, positionNumber: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderJourneysState((sliderJourneysState) => {
        let index = sliderJourneysState.positionNumber + 2;
        if (index >= sliderJourneysState.cardsNumber) {
          index = 0;
        }
        return { ...sliderJourneysState, positionNumber: index };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container__wrapper news__last-journeys">
      <div className="news__last-journeys-box">
        {journeys.map((item, key) => (
          <div
            style={ key !== sliderJourneysState.positionNumber && key !== sliderJourneysState.positionNumber + 1
              ? { display: 'none' }
              : null
            }
            className="news__last-journeys-item"
            key={key}>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <img src={images('./en.jpg')} alt=""/>
            <div>{item.text}</div>
            <button>Browse</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastJourneys;
