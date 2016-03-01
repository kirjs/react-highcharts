console.warn("ReactHighcharts: Bundled versions are deprecated");

if( typeof global.Highcharts !== "undefined"){
  throw Error('ReachHighmaps: Using bundled version, ' +
    'but Highcharts already defined.');
}

module.exports = require('../Highmaps.jsx')(require("highcharts/highmaps"));
