if(!Highcharts) {
  global.HighchartsAdapter = require('highcharts-standalone-adapter');
  var Highcharts = require("highcharts");
  global.Highcharts = Highcharts(global.HighchartsAdapter);
}
module.exports = require('../Highcharts.jsx');
