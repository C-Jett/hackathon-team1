import React from 'react';
import { connect } from 'dva';
import AppLayout from '../components/AppLayout';

function IndexPage() {
  return (
    <AppLayout>
      IndexPage
    </AppLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
