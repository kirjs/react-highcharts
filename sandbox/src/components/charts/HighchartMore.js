import React from "react";
import CodeExample from "./CodeExample";
import code from "./code/HighchartMore";

export default function HighchartMore() {
  const files = {
    "HighchartMore.js": code
  };

  return (
    <CodeExample files={files} name="HighchartMore">
      {code}
    </CodeExample>
  );
}
