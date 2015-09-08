global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
var Highcharts = require("exports?Highcharts!highstock");
var chartFactory = require('./chartsFactory.jsx');
module.exports = chartFactory(Highcharts, 'StockChart');