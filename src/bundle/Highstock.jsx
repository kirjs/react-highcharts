if( Highcharts && !Highcharts.Map){
  throw Error('React-highcharts Highstock module expects Highstock to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if( !Highcharts ){
  global.HighchartsAdapter = require('highcharts-standalone-adapter');
  var Highcharts = require("highstock");
  global.Highcharts = Highcharts(global.HighchartsAdapter);
}

module.exports = require('../Highstock.jsx');
