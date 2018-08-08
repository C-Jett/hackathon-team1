import React from 'react';
import { connect } from 'dva';
import { Icon, Layout, Table } from 'antd';
import styles from './styles.css';
import AppLayout from '../components/AppLayout';
import data from '../models/neighborhoodTier';


const columns = [{
  title: 'Neighborhood',
  dataIndex: 'neighborhood',
}, {
  title: 'Rank',
  dataIndex: 'rank',
}, {
  title: 'Tier',
  dataIndex: 'tier',
  render: (tier) => {
    let icon;
    if (tier.match(/top/i)) icon = (<Icon type="caret-up" />);
    else if (tier.match(/middle/i)) icon = (
      <span>
        <Icon type="caret-left" />
        <Icon type="caret-right" />
      </span>
    );
    else if (tier.match(/bottom/i)) icon = (<Icon type="caret-down" />);
    return (
      <div className={styles[`cell-tier`] + ' ' + styles[`cell-tier-${tier.toLowerCase()}`]}>
        {icon}
      </div>
    );
  }
}];

function NeighborhoodPage() {
  return (
    <AppLayout>
      <Layout.Header className={styles.subheader}>
        Neighborhood Ranking
      </Layout.Header>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record) => {
          const path = record.neighborhood.toLowerCase().replace(' ', '-')
          return {
            onClick: () => window.location = `/#/neighborhood/${path}`
          }
        }}
      />
    </AppLayout>
  )
}

NeighborhoodPage.propTypes = {
};

export default connect()(NeighborhoodPage);
