import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';
import { Layout } from '../../node_modules/antd';
import { List , Avatar, IconText} from 'antd';
import data from '../models/singleNeighborhood';

function SingleNeighborhoodPage({ match }) {
  const { neighborhood } = match && match.params;
  const neighborhoodName = neighborhood.split('-')
    .map(neighborhood => neighborhood.charAt(0).toUpperCase() + neighborhood.substr(1))
    .join(' ');

  return (
    <AppLayout>
      <h2>{neighborhoodName}</h2>
      <List
        size = 'large'
        dataSource = {data}
        renderItem={item => (
      <List.Item
        key={item.title}
        //actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}

      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar}/>}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
      />
    </AppLayout>
  );
}

SingleNeighborhoodPage.propTypes = {
};

export default connect()(SingleNeighborhoodPage);
