import React from "react";
import CodeExample from "./CodeExample";
import europe from "../../europe";
import code from "./code/Highmaps";

export default function Highstock() {
  const files = {
    "Highmaps.js": code,
    "europe.js": europe
  };

  return (
    <CodeExample files={files} name="Highmaps">
      {code}
    </CodeExample>
  );
}
