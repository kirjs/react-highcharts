if( Highcharts && !Highcharts.Map){
  throw Error('ReactHighmaps requires highmaps to be loaded');
}
var chartFactory = require('./chartsFactory.jsx');
module.exports = chartFactory(Highcharts, 'Map');
