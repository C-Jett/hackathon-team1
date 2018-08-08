import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';

function NeighborhoodPage() {
  return (
    <AppLayout>
      NeighborhoodPage
    </AppLayout>
  );
}

NeighborhoodPage.propTypes = {
};

export default connect()(NeighborhoodPage);
