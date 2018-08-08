import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';

function SingleNeighborhoodPage({ match }) {
  const { neighborhood } = match && match.params;
  const neighborhoodName = neighborhood.split('-')
    .map(neighborhood => neighborhood.charAt(0).toUpperCase() + neighborhood.substr(1))
    .join(' ');

  return (
    <AppLayout>
      <h2>{neighborhoodName}</h2>
    </AppLayout>
  );
}

SingleNeighborhoodPage.propTypes = {
};

export default connect()(SingleNeighborhoodPage);
