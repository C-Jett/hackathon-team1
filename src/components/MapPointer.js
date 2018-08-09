import React from 'react';
import { Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>

);
function MapPointer({ neighborhood }) {

  return (
    <IconText key={neighborhood} type="environment" text={neighborhood} />
  );
};

export default MapPointer;
