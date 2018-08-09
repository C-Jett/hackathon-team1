import React from 'react';
import { Layout, Row, Col, Button, Icon } from 'antd';
import styles from '../routes/styles.css';

function NavButtons ({ style, title, backOnly, backPath, backIcon, forwardPath, forwardIcon }) {
  const show = path => typeof path === 'string' || (Array.isArray(path) && path.length) ? 'block' : 'none';
  const link = path => {
    if (Array.isArray(path)) window.location = `/#/${backPath.join('/')}`;
    else window.location = path;
  }
  const showBack = show(backPath);
  const showForward = show(forwardPath);

  let titleEl = null;
  if (title) {
    titleEl = (
      <Col span={18} style={{ textAlign: 'center', color: '#fff' }}>
        {title}
      </Col>
    );
  }

  if (backOnly) {
    return (
      <Button style={style} onClick={ () => link(backPath) } size="large">
        <Icon type={ backIcon || 'arrow-left' } size="medium" shape="circle" />
      </Button>
    );
  }

  return (
    <Layout.Header className={styles.subheader}>
      <Row style={Object.assign({}, { textAlign: 'left', marginBottom: 20 }, style)}>
        <Col span={titleEl ? 3 : 6} style={{ display: showBack }}>
          <Button onClick={ () => link(backPath) } size="small">
            <Icon type={ backIcon || 'arrow-left' } size="medium" shape="circle" />
          </Button>
        </Col>
        {titleEl}
        <Col span={titleEl ? 3 : 6} style={{ textAlign: 'right', display: showForward }}>
          <Button onClick={ () => link(forwardPath) } size="small">
            <Icon type={ forwardIcon || 'arrow-right' } size="medium" shape="circle" />
          </Button>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default NavButtons;
