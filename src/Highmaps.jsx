if( Highcharts && !Highcharts.Map){
  throw Error('');
}
var chartFactory = require('./chartsFactory.jsx');
module.exports = chartFactory(Highcharts, 'Map');
