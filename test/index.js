var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('../src/simulateDOM');
var Highcharts = require('../index.js');
var assert = require('assert');

/**
 * This is a very high level test for react-highcharts.
 * It's purpose is to establish the testing methology.
 * More tests are to follow.
 */
describe('react-highcharts', function () {
  var config, chartArgs;
  beforeEach(function () {
    global.Highcharts.Chart = function () {
      chartArgs = Array.prototype.slice.call(arguments);
      delete chartArgs[0].chart;
    };
    config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
  });

  it('renders the chart', function () {
    TestUtils.renderIntoDocument(
      React.createElement(Highcharts, {config: config})
    );
    assert.deepEqual(chartArgs, [config]);
  });
});


