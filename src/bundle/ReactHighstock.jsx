console.warn("ReactHighcharts: Bundled versions are deprecated");

if( typeof global.Highcharts !== "undefined"){
  throw Error('ReachHighstock: Using bundled version, ' +
    'but Highcharts already defined.');
}

module.exports = require('../Highstock.jsx')(require("highcharts/highstock"));
