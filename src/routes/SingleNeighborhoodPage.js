import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';
import { Layout } from '../../node_modules/antd';
import { List , Avatar, IconText} from 'antd';
import data from '../models/singleNeighborhood';
import styles from './styles.css';

function SingleNeighborhoodPage({ match }) {
  const { neighborhood } = match && match.params;
  const neighborhoodName = neighborhood.split('-')
    .map(neighborhood => neighborhood.charAt(0).toUpperCase() + neighborhood.substr(1))
    .join(' ');

  return (
    <AppLayout>

      <Layout.Header className={styles.subheader}>{neighborhoodName}</Layout.Header>
      <List
        dataSource = {data}
        renderItem={item => (
      <List.Item
        //actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}

      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar}/>}
          title={item.indicator}
          description={item.domain}
        />
        {item.rank}
      </List.Item>
    )}
      />
    </AppLayout>
  );
}

SingleNeighborhoodPage.propTypes = {
};

export default connect()(SingleNeighborhoodPage);
