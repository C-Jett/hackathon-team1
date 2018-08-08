import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import NeighborhoodPage from './routes/NeighborhoodPage';
import IndicatorsPage from './routes/IndicatorsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/neighborhood" exact component={NeighborhoodPage} />
        <Route path="/indicators" exact component={IndicatorsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
