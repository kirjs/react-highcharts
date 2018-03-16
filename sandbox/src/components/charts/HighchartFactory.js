import React from "react";
import CodeExample from "./CodeExample";
import history from "../../history";
import { highchartConst, menuList, baseUrl } from "../constants";

export default function Highchart(props) {
  let { url } = props.match.params;
  if (history.location.pathname === baseUrl) url = menuList[0].url;
  if (url) {
    return (
      <div>
        <CodeExample {...highchartConst[url]} />
      </div>
    );
  } else {
    return "404";
  }
}
