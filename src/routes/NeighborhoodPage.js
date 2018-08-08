import React from 'react';
import { connect } from 'dva';
import { Layout, Table, Pagination } from 'antd';
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
    console.log(styles);
    return (
      <div className={styles[`cell-tier`] + ' ' + styles[`cell-tier-${tier.toLowerCase()}`]}>
        {tier.toUpperCase()}
      </div>
    );
  }
}];

function NeighborhoodPage() {
  return (
    <AppLayout>
      <Layout.Header>
      </Layout.Header>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false} />
    </AppLayout>
  )
}

NeighborhoodPage.propTypes = {
};

export default connect()(NeighborhoodPage);
