import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import NeighborhoodPage from './routes/NeighborhoodPage';
import IndicatorsPage from './routes/IndicatorsPage';
import SingleNeighborhoodPage from './routes/SingleNeighborhoodPage';
import SingleNeighborhoodChartPage from './routes/SingleNeighborhoodChartPage';
import SingleIndicatorPage from './routes/SingleIndicatorPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/neighborhood" exact component={NeighborhoodPage} />
        <Route path="/neighborhood/:neighborhood" exact component={SingleNeighborhoodPage} />
        <Route path="/neighborhood/:neighborhood/chart" exact component={SingleNeighborhoodChartPage} />
        <Route path="/indicators" exact component={IndicatorsPage} />
        <Route path="/indicators/:indicator" exact component={SingleIndicatorPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
