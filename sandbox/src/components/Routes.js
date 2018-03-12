import React from "react";
import { Switch, Route } from "react-router-dom";
import HighchartFactory from "./charts/HighchartFactory";
import { baseUrl } from "./constants";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={baseUrl} component={HighchartFactory} />
        <Route path={`${baseUrl}:url`} component={HighchartFactory} />
      </Switch>
    </div>
  );
}

export default Routes;
