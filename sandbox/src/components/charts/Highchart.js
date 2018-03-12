import React from "react";
import CodeExample from "./CodeExample";
import code from "./code/Highchart";

export default function Highchart(props) {
  const files = {
    "Highchart.js": code
  };
  return (
    <div>
      <CodeExample files={files} name="Highchart">
        {code}
      </CodeExample>
      {props.match.params.url}
    </div>
  );
}
