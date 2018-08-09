import React from 'react';
import { Icon } from 'antd';

const IconText = ({ path, type, text }) => (
  <span onClick={() => window.location = `/#/neighborhood/${path}`}>
    <Icon type={type} style={{color: 'red', fontSize: 25}} />
    <span style={{
        fontSize: 14,
        alignItems:'center',
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 5
      }
    }>
      {text}
    </span>
  </span>



);
function MapPointer({ neighborhood }) {
  const path = neighborhood.toLowerCase().replace(' ', '-');
  return (
    <div key={neighborhood} style={{ width: 200 }}>
      <IconText key={neighborhood} type="environment" text={neighborhood}
        path={path}
      />
    </div>
  );
};

export default MapPointer;
