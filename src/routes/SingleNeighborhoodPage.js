import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';
import { Layout } from '../../node_modules/antd';
import { Row, Col, List, Icon} from 'antd';
// import data from '../models/singleNeighborhood';
import indicatorsModel from '../models/indicators';
import styles from './styles.css';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function SingleNeighborhoodPage({ match }) {
  const { neighborhood } = match && match.params;
  const neighborhoodName = neighborhood.split('-')
    .map(neighborhood => neighborhood.charAt(0).toUpperCase() + neighborhood.substr(1))
    .join(' ');

  const data = indicatorsModel.map(({ indicator, domain = '' }) => {
    return {
      indicator,
      domain,
      rank: Math.floor(Math.random() * 20) + 1,
      value: Number.parseFloat(Math.floor(Math.random() * 100)).toPrecision(2),
      tier: Math.floor(Math.random() * 3)
    }
  });

  return (
    <AppLayout>

      <Layout.Header className={styles.subheader}>{neighborhoodName}</Layout.Header>
      <List
        dataSource={data}
        renderItem={({indicator, domain, rank, tier, value}) => {
          let tierIcon;
          if (tier === 1) tierIcon = (<Icon className={styles['tier-top']} type="caret-up" />);
          if (tier === 2) tierIcon = (<Icon className={styles['tier-bottom']} type="caret-down" />);
          if (tier === 3) tierIcon = (
            <span className={styles['tier-middle']}>
              <Icon type="caret-left" />
              <Icon type="caret-right" />
            </span>
          );

          return (
            <List.Item>
              <List.Item.Meta
                title={indicator}
                description={(
                  <Row>
                    <Col span={6} className={styles.neighborhoodMeta}>
                      <span>{domain}</span>
                    </Col>
                    <Col span={6} className={styles.neighborhoodMeta}>
                      <IconText type="message" text={value} />%
                    </Col>
                    <Col span={6} className={styles.neighborhoodMeta}>
                      <IconText type="trophy" text={rank} />
                    </Col>
                    <Col span={6} className={styles.neighborhoodMeta}>
                      {tierIcon}
                    </Col>
                  </Row>
                )}
              />
            </List.Item>
          )
        }}
      />
    </AppLayout>
  );
}

SingleNeighborhoodPage.propTypes = {
};

export default connect()(SingleNeighborhoodPage);
