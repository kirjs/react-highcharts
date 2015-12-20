if( Highcharts && !Highcharts.Map){
  throw Error('React-highcharts Highmaps module expects Highmaps to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if(!Highcharts) {
  global.HighchartsAdapter = require('highcharts-standalone-adapter');
  var Highcharts = require("highmaps");
  global.Highcharts = Highcharts(global.HighchartsAdapter);
}
module.exports = require('../Highmaps.jsx');
