if( typeof Highcharts !== "undefined" && !Highcharts.Map){
  throw Error('React-highcharts Highmaps module expects Highmaps to be loaded, ' +
    'but looks like a different copy of Highcharts was loaded before that');
}
if(typeof Highcharts === "undefined" ) {
  global.Highcharts = require("highmaps");
}
module.exports = require('../Highmaps.jsx');
