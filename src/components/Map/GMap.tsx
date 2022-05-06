import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const GMap = ({ main, error, loading }) => {
  // const { isAuth, message, token } = useTypedSelector((state) => state.auth);
  const [insideMap, setInsideMap] = useState(false);
  const { fetchMain } = useActions();

  useEffect(() => {
    fetchMain();
    // console.log(isAuth, message, token);
  }, []);

  function getWheel() {
    setInsideMap(!insideMap);
    // 1. Logged in, house does not exist , do you want to write the first review
    // 2. Logged in, exists , do you want to write the one more review
    // 3. Not Logged in, house does not exist , do you want to register , write the first review
    // 4. Not Logged in, exists , do you want to register and write one more review
  }

  if (loading) {
    return <h1>
            Loading...
    </h1>;
  }

  if (error) {
    return <h1>
            Location is not defined...
    </h1>;
  }

  return (
    <div
      className="gmap">
      <GoogleMapReact
        options={{
          scrollwheel: insideMap,
        }}
        onClick={() => getWheel()}
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={main.center}
        defaultZoom={main.zoom}
      >
        <div
          className="gmap__point"
        >Yalberg
        </div>
      </GoogleMapReact>

    </div>
  );
};

export default GMap;
