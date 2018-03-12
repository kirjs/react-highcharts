import React from "react";
import CodeExample from "./CodeExample";
import code from "./code/Highstock";

export default function Highstock() {
  const files = {
    "Highstock.js": code
  };

  return (
    <CodeExample files={files} name="Highstock">
      {code}
    </CodeExample>
  );
}
