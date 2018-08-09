import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import NeighborhoodPage from './routes/NeighborhoodPage';
import IndicatorsPage from './routes/IndicatorsPage';
import SingleNeighborhoodPage from './routes/SingleNeighborhoodPage';
import SingleIndicatorPage from './routes/SingleIndicatorPage';
import mapsPage from './routes/mapsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/neighborhood" exact component={NeighborhoodPage} />
        <Route path="/neighborhood/:neighborhood" exact component={SingleNeighborhoodPage} />
        <Route path="/indicators" exact component={IndicatorsPage} />
        <Route path="/indicators/:indicator" exact component={SingleIndicatorPage} />
        <Route path="/search" exact component={mapsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
