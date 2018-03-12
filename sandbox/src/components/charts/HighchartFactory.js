import React from "react";
import CodeExample from "./CodeExample";
import highchartConst from "./highchartConst";
import history from "../../history";
import { highchart } from "../UrlConst";

export default function Highchart(props) {
  let { url } = props.match.params;
  console.log("history", history);
  if (url || history.location.pathname === "/react-highcharts/") {
    if (!url) url = highchart;
    const { name, files, code, nameMainFile } = highchartConst[url];
    return (
      <div>
        <CodeExample files={files} name={name} nameMainFile={nameMainFile}>
          {code}
        </CodeExample>
        {url}
      </div>
    );
  } else {
    return "404";
  }
}
