import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Highchart, Highstock, Highmaps, HighchartMore} from './charts'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/react-highcharts/highchart" component={Highchart}/>
        <Route path="/react-highcharts/highmaps" component={Highmaps}/>
        <Route path="/react-highcharts/highstock" component={Highstock}/>
        <Route path="/react-highcharts/highchartmore" component={HighchartMore}/>
        <Route path="/react-highcharts" component={Highchart}/>
      </Switch>
    </div>
  )

}

export default Routes

