import React from 'react';
import { connect } from 'dva';
import GoogleMapReact from 'google-map-react';
import data from '../models/neighborhoodTier';
import MapPointer from '../components/MapPointer';
import neighborhoodTier from '../models/neighborhoodTier';

const opts = {
  center: {
    lat: 33.5186,
    lng: -86.8104,
  },
    zoom:14
  };

  function mapsPage(props, context) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDmM3HqFBnUtlLvemt4jW2AzcswlgmqEZY' }}
          defaultCenter={opts.center}
          defaultZoom={opts.zoom}
        >

          {
            data.map(({ neighborhood, geolocation }) => {
              if (!geolocation || !geolocation.length) return null;
              return ( <MapPointer lat={geolocation[0]} lng={geolocation[1]} neighborhood={neighborhood} /> );
            })
          }

        </GoogleMapReact>
      </div>

    );


  };


  mapsPage.propTypes = {
  };

  export default connect()(mapsPage);
