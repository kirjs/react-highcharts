import UrlConst, {
  highchart,
  highchartsMore,
  highstock,
  highmaps
} from "../UrlConst";

import {
  Highchart,
  HighchartMore,
  Highmaps,
  Highstock,
  nameFilesConst
} from "./code";
import europe from "../../europe";

const highchartConst = {
  [highchart]: {
    ...UrlConst[highchart],
    files: { [nameFilesConst[highchart] + ".js"]: Highchart },
    code: Highchart,
    nameMainFile: nameFilesConst[highchart]
  },
  [highchartsMore]: {
    ...UrlConst[highchartsMore],
    files: { [nameFilesConst[highchartsMore] + ".js"]: HighchartMore },
    code: HighchartMore,
    nameMainFile: nameFilesConst[highchartsMore]
  },
  [highstock]: {
    ...UrlConst[highstock],
    files: { [nameFilesConst[highstock] + ".js"]: Highstock },
    code: Highstock,
    nameMainFile: nameFilesConst[highstock]
  },
  [highmaps]: {
    ...UrlConst[highmaps],
    files: {
      [nameFilesConst[highmaps] + ".js"]: Highmaps,
      "europe.js": europe
    },
    code: Highmaps,
    nameMainFile: nameFilesConst[highmaps]
  }
};

export default highchartConst;
