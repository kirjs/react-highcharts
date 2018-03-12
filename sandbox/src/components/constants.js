import { Highchart, HighchartMore, Highmaps, Highstock } from "./charts/code";
import europe from "../europe";

export const highchart = "highchart";
export const highchartsMore = "highcharts-more";
export const highstock = "highstock";
export const highmaps = "highmaps";

export const UrlConst = {
  [highchart]: { url: highchart },
  [highchartsMore]: { url: highchartsMore },
  [highstock]: { url: highstock },
  [highmaps]: { url: highmaps }
};

export const menuList = [
  {
    ...UrlConst[highchart],
    name: "Highcharts",
    nestedItems: [{ ...UrlConst[highchartsMore], name: "Highcharts-More" }]
  },
  { ...UrlConst[highstock], name: "Highstock" },
  { ...UrlConst[highmaps], name: "Highmaps" }
];

export const filenames = {
  [highchart]: "Highchart",
  [highchartsMore]: "HighchartMore",
  [highstock]: "Highstock",
  [highmaps]: "Highmaps"
};

export const highchartConst = {
  [highchart]: {
    ...UrlConst[highchart],
    files: { [filenames[highchart] + ".js"]: Highchart },
    code: Highchart,
    fileName: filenames[highchart]
  },
  [highchartsMore]: {
    ...UrlConst[highchartsMore],
    files: { [filenames[highchartsMore] + ".js"]: HighchartMore },
    code: HighchartMore,
    fileName: filenames[highchartsMore]
  },
  [highstock]: {
    ...UrlConst[highstock],
    files: { [filenames[highstock] + ".js"]: Highstock },
    code: Highstock,
    fileName: filenames[highstock]
  },
  [highmaps]: {
    ...UrlConst[highmaps],
    files: {
      [filenames[highmaps] + ".js"]: Highmaps,
      "europe.js": europe
    },
    code: Highmaps,
    fileName: filenames[highmaps]
  }
};

export const baseUrl = "/react-highcharts/";
