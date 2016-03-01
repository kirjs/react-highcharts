console.warn("ReactHighcharts: Bundled versions are deprecated");

if( typeof global.Highcharts !== "undefined"){
  throw Error('ReachHighcharts: Using bundled version, ' +
    'but Highcharts already defined.');
}

module.exports = require('../ReactHighcharts.jsx')(require("highcharts"));