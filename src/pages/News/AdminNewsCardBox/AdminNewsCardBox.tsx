import React, { useState } from 'react';

const images = require.context('../../../images', true);

const AdminNewsCardBox = () => {
  const news = [
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
            + '                    Dolore minus odio possimus quae repellendus, sapiente.\n'
            + '                    Aut expedita ipsam ipsum tempora! Accusantium alias cupiditate\n'
            + '                    doloremque esse facilis laboriosam, laborum laudantium maiores placeat provident.\n'
            + '                    Aut expedita ipsam ipsum tempora! Accusantium alias cupiditate\n'
            + '                    doloremque esse facilis laboriosam, laborum laudantium maiores placeat provident.',
    },
    { text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur' },
    { text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur' },
    { text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur' },
    { text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur' },
    { text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias autem beatae consequatur' },
  ];

  const [sliderNewsState, setNewsSliderState] = useState({ cardsNumber: news.length, positionNumber: 0 });

  const setSliderIndex = (index:number) => {
    let subIndex = index;
    if (index >= sliderNewsState.cardsNumber - 2) {
      subIndex = 0;
    } else if (index < 0) {
      subIndex = sliderNewsState.cardsNumber - 3;
    }
    setNewsSliderState({ ...sliderNewsState, positionNumber: subIndex });
  };

  return (
    <div
      style={{ backgroundColor: 'white' }}
      className="container__wrapper news__messages">
      <button
        onClick={() => { setSliderIndex(sliderNewsState.positionNumber + 1); }}
      >click</button>
      <div className="news__cardbox">
        {
          news.map((item, key) => (
            <div
              style={ sliderNewsState.positionNumber
                ? { transform: `translateX(-${sliderNewsState.positionNumber * 350}px)` }
                : null}
              className="news__messages-item"
              key={key}
            >
              <img src={images('./en.jpg')} alt=""/>
              <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>
                  {item.text.substring(0, 250)}
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <button
        onClick={() => { setSliderIndex(sliderNewsState.positionNumber - 1); }}
      >right</button>

    </div>
  );
};

export default AdminNewsCardBox;
