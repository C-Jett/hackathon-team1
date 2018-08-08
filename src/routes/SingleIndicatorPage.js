import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';

function SingleIndicatorsPage({ match }) {
  const { indicator } = match && match.params;
  const indicatorName = indicator.split('-')
    .map(indicator => indicator.charAt(0).toUpperCase() + indicator.substr(1))
    .join(' ');

  return (
    <AppLayout>
      <h2>{indicatorName}</h2>
    </AppLayout>
  );
}

SingleIndicatorsPage.propTypes = {
};

export default connect()(SingleIndicatorsPage);
