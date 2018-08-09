import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';
import { Layout } from 'antd';
import NavButtons from '../components/NavButtons';
import indicators from '../models/indicators';
import styles from './styles.css';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

function SingleNeighborhoodPage({ match }) {
  const { neighborhood } = match && match.params;
  const neighborhoodName = neighborhood.split('-')
    .map(neighborhood => neighborhood.charAt(0).toUpperCase() + neighborhood.substr(1))
    .join(' ');

    // Data here
    const { DataView } = DataSet;
    const domainGroups = indicators.reduce((data, { domain }) => {
      if (!data[domain]) data[domain] = {
        indicators: 0,
        value: 0
      };

      data[domain].indicators += 1;
      data[domain].value += Math.floor(Math.random() * 80) + 20;

      return data;
    }, {});
    const data = Object.keys(domainGroups).map(domain => {
      const { indicators, value } = domainGroups[domain];
      return {
        item: domain,
        neighborhood: value / indicators
      };
    });
    console.log(data);

    const dv = new DataView().source(data);
        dv.transform({
          type: 'fold',
          fields: [ 'neighborhood' ],
          key: 'user',
          value: 'score',
        });

        const cols = {
          score: {
              min: 0,
              max: 100
            }
        }

  return (
    <AppLayout>

      <NavButtons
        backPath={[ `neighborhood/${match.params.neighborhood}` ]}
      />

      <Layout.Header className={styles.subheader}>{neighborhoodName}</Layout.Header>
      <Chart height={window.innerWidth-20} data={dv} padding={[20, 20, 20, 20 ]} scale={cols} forceFit>
          <Coord type="polar" radius={0.5} />
          <Axis name="item" line={null} tickLine={null} grid={{lineStyle: {
              lineDash: null
            },
            hideFirstLine: false}} />
          <Tooltip />
          <Axis name="score" line={null} tickLine={null} grid={{type: 'polygon',
            lineStyle: {
              lineDash: null
            },
            alternateColor: 'rgba(0, 0, 0, 0.04)'}} />
          <Legend name="user" marker="circle" offset={30}/>
          <Geom type='area' position="item*score" color="user" />
          <Geom type='line' position="item*score" color="user" size={2}/>
          <Geom type='point' position="item*score" color="user" shape="circle" size={4} style={{stroke: '#fff',
          lineWidth: 1,
          fillOpacity: 1}} />
        </Chart>
    </AppLayout>
  );
}

SingleNeighborhoodPage.propTypes = {
};

export default connect()(SingleNeighborhoodPage);
