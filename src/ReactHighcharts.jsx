import chartsFactory from "./chartsFactory.jsx";
import "highcharts";

let Highcharts;

if (window.Highcharts) {
  Highcharts = window.Highcharts;
}

export default chartsFactory("Chart", Highcharts);
