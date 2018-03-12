import React from "react";
import { Switch, Route } from "react-router-dom";
import HighchartFactory from "./charts/HighchartFactory";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={"/react-highcharts/"} component={HighchartFactory} />
        <Route path={"/react-highcharts/:url"} component={HighchartFactory} />
        <Route path={"/react-highcharts/:url"} component={HighchartFactory} />
        <Route path={"/react-highcharts/:url"} component={HighchartFactory} />
        <Route path={"/react-highcharts/:url"} component={HighchartFactory} />
      </Switch>
    </div>
  );
}

export default Routes;
