import Chart from "./Chart";
import Home from "./Home"
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Highchart, Highstock, Highmaps, HighchartMore} from './charts'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={Chart}/>
        <Route path="/highchart" component={Highchart}/>
        <Route path="/highmaps" component={Highmaps}/>
        <Route path="/highstock" component={Highstock}/>
        <Route path="/highchartmore" component={HighchartMore}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )

}

export default Routes

