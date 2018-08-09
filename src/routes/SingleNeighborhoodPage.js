import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';
import { Layout } from '../../node_modules/antd';
import { Row, Col, List, Icon} from 'antd';
import indicatorsModel from '../models/indicators';
import styles from './styles.css';
import NavButtons from '../components/NavButtons';

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

  const data = indicatorsModel
    .sort((a, b) => {
      if (a.indicator.toUpperCase() < b.indicator.toUpperCase()) return -1;
      if (a.indicator.toUpperCase() > b.indicator.toUpperCase()) return 1;
      return 0;
    })
    .map(({ indicator, domain = '' }) => {
      const rank = Math.floor(Math.random() * 20) + 1;
      const tier = Math.floor(Math.floor(rank / 3) / 3) + 1;
      return {
        indicator,
        domain,
        rank,
        value: Number.parseFloat(Math.floor(Math.random() * 100)).toPrecision(2),
        tier
      }
    });

  return (
    <AppLayout>

      <NavButtons
        backPath={['neighborhood']}
        forwardPath={`${window.location}/chart`}
        forwardIcon='line-chart'
      />

      <Layout.Header className={styles.subheader}>
        {neighborhoodName}
      </Layout.Header>
      <List
        dataSource={data}
        renderItem={({indicator, domain, rank, tier, value}) => {
          let tierIcon;
          if (tier === 1) tierIcon = (<Icon className={styles['tier-top']} type="caret-up" />);
          if (tier === 3) tierIcon = (<Icon className={styles['tier-bottom']} type="caret-down" />);
          if (tier === 2) tierIcon = (
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
                      <IconText type="filter" text={value} /> %
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
