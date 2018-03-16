import { Highchart, HighchartMore, Highmaps, Highstock } from "./charts/code";
import europe from "../europe";

const highchart = "highchart";
const highchartsMore = "highcharts-more";
const highstock = "highstock";
const highmaps = "highmaps";

export const menuList = [
  {
    url: highchart,
    name: "Highcharts",
    nestedItems: [{ url: highchartsMore, name: "Highcharts-More" }]
  },
  { url: highstock, name: "Highstock" },
  { url: highmaps, name: "Highmaps" }
];

export const filenames = {
  [highchart]: "Highchart",
  [highchartsMore]: "HighchartMore",
  [highstock]: "Highstock",
  [highmaps]: "Highmaps"
};

export const highchartConst = {
  [highchart]: {
    url: highchart,
    files: { [filenames[highchart] + ".js"]: Highchart },
    code: Highchart,
    fileName: filenames[highchart]
  },
  [highchartsMore]: {
    url: highchartsMore,
    files: { [filenames[highchartsMore] + ".js"]: HighchartMore },
    code: HighchartMore,
    fileName: filenames[highchartsMore]
  },
  [highstock]: {
    url: highstock,
    files: { [filenames[highstock] + ".js"]: Highstock },
    code: Highstock,
    fileName: filenames[highstock]
  },
  [highmaps]: {
    url: highmaps,
    files: {
      [filenames[highmaps] + ".js"]: Highmaps,
      "europe.js": europe
    },
    code: Highmaps,
    fileName: filenames[highmaps]
  }
};

export const baseUrl = "/react-highcharts/";
