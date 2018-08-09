import React from 'react';
import { connect } from 'dva';
import { Table, Layout } from 'antd';
import styles from './styles.css';
import AppLayout from '../components/AppLayout';
import indicatorsData from '../models/indicators';
import NavButtons from '../components/NavButtons';

const columns = [{
  title: 'Indicators',
  dataIndex: 'indicator',
  key: 'indicator',
  render: (indicator, item) => {
    return (
      <div>
        <strong>{indicator}</strong>
        <p>{item.description}</p>
      </div>
    );
  }
}];

const data = indicatorsData.map((item, key) => {
  return Object.assign({}, item, { key });
})

function IndicatorsPage() {
  return (
    <AppLayout>
      <NavButtons
        backPath={[ '' ]}
      />
      <Layout.Header className={styles.subheader}>HCI Domains and Indicators</Layout.Header>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          onRow={(record) => {
            const path = record.indicator.toLowerCase().replace(' ', '-');
            return {
              onClick: () => window.location = `/#/indicators/${path}`
            };
          }}
        />
      </div>
    </AppLayout>
  );
}

IndicatorsPage.propTypes = {
};

export default connect()(IndicatorsPage);
