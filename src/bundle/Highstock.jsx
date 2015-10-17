if( Highcharts && !Highcharts.Map){
  throw Error('React-highcharts Highstock module expects Highstock to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if( !Highcharts ){
  global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
  var Highcharts = require("exports?Highcharts!highstock");
}

module.exports = require('../Highstock.jsx');
