import React from "react";
import CodeExample from "./CodeExample";
import history from "../../history";
import { highchart, highchartConst, baseUrl } from "../constants";

export default function Highchart(props) {
  let { url } = props.match.params;
  if (history.location.pathname === baseUrl) url = highchart;
  if (url) {
    const { name, files, code, fileName } = highchartConst[url];
    return (
      <div>
        <CodeExample
          code={code}
          files={files}
          name={name}
          fileName={fileName}
        />
      </div>
    );
  } else {
    return "404";
  }
}
