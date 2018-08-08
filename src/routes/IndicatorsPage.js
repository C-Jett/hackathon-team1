import React from 'react';
import { connect } from 'dva';
import { AppLayout } from '../components/AppLayout';

function IndicatorsPage() {
  return (
    <AppLayout>
      NeighborhoodPage
    </AppLayout>
  );
}

IndicatorsPage.propTypes = {
};

export default connect()(IndicatorsPage);
