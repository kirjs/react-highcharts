import Chart from "./Chart";
import Home from "./Home"
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Area, AreaTrue, Highstock, HighstockTrue} from './charts'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={Chart}/>
        <Route path="/area" component={Area}/>
        <Route path="/highstock" component={Highstock}/>
        <Route path="/areatrue" component={AreaTrue}/>
        <Route path="/highstocktrue" component={HighstockTrue}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )

}

export default Routes

