import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import AppLayout from '../components/AppLayout';
import { Row, Col, Button } from 'antd';

const handleClick = (context, route) => {
  context.history.push(route);
};

function IndexPage(props, context) {
  return (
    <AppLayout>
      <h3>Neighborhood systems and structures can support healthy living and healthy behaviors</h3>
      <Row style={{marginBottom: 10}}>
        <Col span={24}>
          <Button href="/#/neighborhood" className={styles.button} type="primary" block>Neighborhoods</Button>
        </Col>
      </Row>
      <Row style={{marginBottom: 10}}>
        <Col span={24}>
          <Button href="/#/indicators" className={styles.button} type="primary" block>Indicators</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button href="/#/search" className={styles.button} type="primary" block>Search Neighborhoods</Button>
        </Col>
      </Row>

      <br />
      <hr />
      <p>
      The Healthy Communities Assessment Tool (HCAT) ranks each city neighborhood on more than 40 social, economic, and physical factors important to community health. Users can examine how their own neighborhood performs on each factor and compare neighborhoods on their overall ranking of core indicators from the Healthy Communities Index (HCI).
      </p>
    </AppLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
