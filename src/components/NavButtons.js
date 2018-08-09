import React from 'react';
import { Row, Col, Button, Icon } from 'antd';

function NavButtons ({ backPath, backIcon, forwardPath, forwardIcon }) {
  const show = path => typeof path === 'string' || (Array.isArray(path) && path.length) ? 'block' : 'none';
  const link = path => {
    if (Array.isArray(path)) window.location = `/#/${backPath.join('/')}`;
    else window.location = path;
  }
  const showBack = show(backPath);
  const showForward = show(forwardPath);
  return (
    <Row style={{ marginBottom: 20 }}>
      <Col span={12} style={{ display: showBack }}>
        <Button onClick={ () => link(backPath) }>
          <Icon type={ backIcon || 'arrow-left' } size="medium" shape="circle" />
        </Button>
      </Col>
      <Col span={12} style={{ textAlign: 'right', display: showForward }}>
        <Button onClick={ () => link(forwardPath) }>
          <Icon type={ forwardIcon || 'arrow-right' } size="medium" shape="circle" />
        </Button>
      </Col>
    </Row>
  );
}

export default NavButtons;
