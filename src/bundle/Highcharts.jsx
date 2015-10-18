if(!Highcharts) {
  global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
  var Highcharts = require("highcharts");
}
module.exports = require('../Highcharts.jsx');
