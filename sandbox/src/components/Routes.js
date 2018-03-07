import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Highchart, Highstock, Highmaps, HighchartMore} from './charts'
import resolvePathname from 'resolve-pathname';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path={resolvePathname('highchart', window.location.pathname)} component={Highchart} />
        <Route path={resolvePathname('highmaps', window.location.pathname)} component={Highmaps}/>
        <Route path={resolvePathname('highstock', window.location.pathname)} component={Highstock}/>
        <Route path={resolvePathname('highcharts-more', window.location.pathname)} component={HighchartMore} />
        <Route path='/react-highcharts/' component={Highchart}/>
      </Switch>
    </div>
  )
}

export default Routes

