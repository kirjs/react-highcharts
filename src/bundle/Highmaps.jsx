if( typeof global.Highcharts !== "undefined" && !global.Highcharts.Map){
  throw Error('React-highcharts Highmaps module expects Highmaps to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if(typeof global.Highcharts === "undefined" ) {
  global.Highcharts = require("highcharts/highmaps");
}
module.exports = require('../Highmaps.jsx');
