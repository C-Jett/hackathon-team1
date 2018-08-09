import React from 'react';
import { connect } from 'dva';
import { Icon, Table  } from 'antd';
import AppLayout from '../components/AppLayout';
import data from '../models/SingleIndicatorTier';
import NavButtons from '../components/NavButtons';

const columns = [{
  title: 'Neighborhood',
  dataIndex: 'neighborhood',
  key: 'neighborhood'
}, {
  title: 'Value',
  dataIndex: 'value',
  key: 'value',
}, {
  title: (<Icon type="trophy" />),
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

      <NavButtons
        title={indicatorName}
        backPath={[ 'indicators' ]}
      />

      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          onRow={(record) => {
            const path = record.neighborhood.toLowerCase().replace(' ', '-');
            return {
              onClick: () => window.location = `/#/neighborhood/${path}`
            };
          }}
        />
      </div>
    </AppLayout>
  );
}

SingleIndicatorsPage.propTypes = {
};

export default connect()(SingleIndicatorsPage);
