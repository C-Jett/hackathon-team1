import React from 'react';
import { connect } from 'dva';
import { Table  } from 'antd';
import AppLayout from '../components/AppLayout';
import data from '../models/SingleIndicatorTier';

const columns = [{
  title: 'Neighborhood',
  dataIndex: 'neighborhood',
  key: 'neighborhood'
}, {
  title: 'Indicator Value',
  dataIndex: 'value',
  key: 'value',
}, {
  title: 'Rank',
  dataIndex: 'rank',
  key: 'rank',
  className: 'table-rank'
}];

function SingleIndicatorsPage({ match }) {
  const { indicator } = match && match.params;
  const indicatorName = indicator.split('-')
    .map(indicator => indicator.charAt(0).toUpperCase() + indicator.substr(1))
    .join(' ');

  return (
    <AppLayout>
      <h2>{indicatorName}</h2>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}/>
      </div>
    </AppLayout>
  );
}

SingleIndicatorsPage.propTypes = {
};

export default connect()(SingleIndicatorsPage);
