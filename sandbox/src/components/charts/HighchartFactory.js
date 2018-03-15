import React from "react";
import CodeExample from "./CodeExample";
import history from "../../history";
import { highchart, highchartConst, baseUrl } from "../constants";

export default function Highchart(props) {
  let { url } = props.match.params;
  if (history.location.pathname === baseUrl) url = highchart;
  if (url) {
    return (
      <div>
        <CodeExample
          {...highchartConst[url]}
        />
      </div>
    );
  } else {
    return "404";
  }
}
