var React = require('react');
var assert = require('assert');
var TestUtils =  require('react-addons-test-utils');
require('./simulateDOM');


function bundleTest(bundleName, chartName) {
  describe('react-highcharts/bundle' + bundleName, function () {
    var Component, args, config;
    beforeEach(function () {
      Component = require('../dist/' + bundleName + '.src.js');

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

