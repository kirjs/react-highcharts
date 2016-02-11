var React = require('react');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');

function unCacheLib(path){
  var keys = Object.keys(require.cache);
  var last = keys.length - 1;

  for (var i = last; i > 0; i--) {
    if (keys[i].indexOf(path) > -1) {
      delete require.cache[keys[i]];
      return;
    }
  }
}

function nonBundleTest(lib, chartName, extra){
  var libPath = 'dist/' + lib + '.src.js';
  describe('react-highcharts/' + lib, function (){
    var Component, args, config;
    beforeEach(function (){
      unCacheLib(libPath);
    });

    it('Renders the chart with the appropriate parameters', function (){
      var Highcharts = require('../src/fakeHighcharts');

      Component = require('../' + libPath)(Highcharts);

      args = undefined;

      config = {
        a: 1
      };

      Highcharts[chartName] = function (){
        args = Array.prototype.slice.call(arguments);
        delete args[0].chart;
      };


      TestUtils.renderIntoDocument(
        React.createElement(Component, {config: config})
      );
      assert.deepEqual(args, [config]);
    });
  })
}


nonBundleTest('ReactHighcharts', 'Chart');
nonBundleTest('ReactHighstock', 'StockChart');
nonBundleTest('ReactHighmaps', 'Map');



