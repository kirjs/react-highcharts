if( Highcharts && !Highcharts.StockChart){
  throw Error('ReactHighstock requires highstock to be loaded');
}
var chartFactory = require('./chartsFactory.jsx');
module.exports = chartFactory(Highcharts, 'StockChart');
