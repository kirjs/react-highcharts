if(  typeof Highcharts !== "undefined" && !Highcharts.Map){
  throw Error('React-highcharts Highstock module expects Highstock to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if( typeof Highcharts === "undefined" ){
  global.Highcharts = require("highstock");
}

module.exports = require('../Highstock.jsx');
