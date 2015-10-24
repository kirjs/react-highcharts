var React = require('react/addons');
var assert = require('assert');
var TestUtils = React.addons.TestUtils;
require('../src/simulateDOM');


function bundleTest(bundleName, chartName) {
  describe('react-highcharts/' + bundleName, function () {
    var Component, args, config;
    beforeEach(function () {
      ([].concat(bundleName)).map(function () {
        Component = require('../dist/' + bundleName + '.js');
      });

      args = undefined;

      config = {
        a: 1
      };

      global.Highcharts[chartName] = function () {
        args = Array.prototype.slice.call(arguments);
        delete args[0].chart;
      };
    });

    afterEach(function () {
      delete global.Highcharts;
    });

    it('Renders the chart with the appropriate parameters', function () {
      TestUtils.renderIntoDocument(
        React.createElement(Component, {config: config})
      );
      assert.deepEqual(args, [config]);
    });
  })
}


bundleTest('bundle/highcharts', 'Chart');
bundleTest('bundle/highstock', 'StockChart');
bundleTest('bundle/highmaps', 'Map');

