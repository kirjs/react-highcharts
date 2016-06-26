var React = require('react');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');
var mock = require('mock-require');
var sinon = require('sinon');

function nonBundleTest(lib, chartName, modulename){
  var libPath = 'dist/' + lib + '.src.js';
  var fakeHighChartsInstance = {};
  var noop = () =>{
  };
  describe('react-highcharts/' + lib, ()=>{
    var Component, fakeHighcharts;

    beforeEach(()=>{
      fakeHighcharts = {};
      mock(modulename, fakeHighcharts);
      Component = mock.reRequire('../' + libPath);
    });

    describe('Config', ()=>{
      it('Renders the chart and passes apropriate fakeConfig', ()=>{
        var fakeConfig = {};

        fakeHighcharts[chartName] = sinon.spy();

        TestUtils.renderIntoDocument(
          React.createElement(Component, {config: fakeConfig, callback: noop})
        );

        assert(fakeHighcharts[chartName].called);
        var arg = fakeHighcharts[chartName].firstCall.args[0];
        delete arg.chart;
        assert.deepEqual(arg, fakeConfig);
      });

      it('Extends config with the DOM node, but preserves existing properties', ()=>{
        var fakeConfig = {
          chart: {
            specialProp: {}
          }
        };

        fakeHighcharts[chartName] = sinon.spy();

        TestUtils.renderIntoDocument(
          React.createElement(Component, {config: fakeConfig, callback: noop})
        );

        assert(fakeHighcharts[chartName].called);

        var arg = fakeHighcharts[chartName].firstCall.args[0];
        // Existing property is preserved
        assert.equal(arg.chart.specialProp, fakeConfig.chart.specialProp);
        // Node element is added
        assert(arg.chart.hasOwnProperty('renderTo'));
      });
    });

    it('Sets chart property to the highcharts instance', ()=>{
      var fakeHighchartsInstance = {};
      fakeHighcharts[chartName] = sinon.stub().returns(fakeHighchartsInstance);

      var component = TestUtils.renderIntoDocument(
        React.createElement(Component, {config: {}, callback: noop})
      );
      assert.equal(fakeHighchartsInstance, component.getChart());
    });


    describe('clean up', ()=>{
      it('Destroys Highcharts when component gets unmounted', ()=>{
        var fakeHighchartsInstance = {
          destroy: sinon.stub()
        };
        fakeHighcharts[chartName] = sinon.stub().returns(fakeHighchartsInstance);

        var component = TestUtils.renderIntoDocument(
          React.createElement(Component, {config: {}, callback: noop})
        );

        assert(!fakeHighchartsInstance.destroy.called);
        component.componentWillUnmount();
        assert(fakeHighchartsInstance.destroy.called);
      });
    });

    describe('WithHighcharts', ()=>{
      it('Allows to replace Highcharts instance', ()=>{
        var otherFakeHighcharts = {};
        fakeHighcharts[chartName] = sinon.spy();
        otherFakeHighcharts[chartName] = sinon.spy();
        var fakeConfig = {};

        // When an ReactHighachrts instance is creative with a different
        // Highcharts instance
        var Component2 = Component.withHighcharts(otherFakeHighcharts);

        // And rendered
        TestUtils.renderIntoDocument(
          React.createElement(Component2, {config: fakeConfig, callback: noop})
        );

        // The original Highcharts instance methods were not called.
        assert(!fakeHighcharts[chartName].called);

        // The passed Highcharts instance methods were called.
        assert(otherFakeHighcharts[chartName].called);
        var arg = otherFakeHighcharts[chartName].firstCall.args[0];
        delete arg.chart;
        assert.deepEqual(arg, fakeConfig);
      });
    });

    describe('Reflowing', function (){
      beforeEach(()=>{
        global.requestAnimationFrame = sinon.stub();
      });


      it('Schedules reflow in the next animation frame', function (){
        var fakeHighchartsInstance = {
          options: {},
          reflow: sinon.stub()
        };

        fakeHighcharts[chartName] = sinon.stub().returns(fakeHighchartsInstance);

        TestUtils.renderIntoDocument(
          React.createElement(Component, {config: {}, callback: noop})
        );

        assert(global.requestAnimationFrame.called);
        var callback = global.requestAnimationFrame.firstCall.args[0];
        assert(!fakeHighchartsInstance.reflow.called);
        callback();
        assert(fakeHighchartsInstance.reflow.called);
      });

      it('Never reflows if neverReflow is true', function (){
        var fakeHighchartsInstance = {
          options: {},
          reflow: sinon.stub()
        };

        fakeHighcharts[chartName] = sinon.stub().returns(fakeHighchartsInstance);

        TestUtils.renderIntoDocument(
          React.createElement(Component, {
            config: {},
            callback: noop,
            neverReflow: true
          })
        );

        assert(!global.requestAnimationFrame.called);
        assert(!fakeHighchartsInstance.reflow.called);
      })
    });
  })
}


nonBundleTest('ReactHighcharts', 'Chart', 'highcharts');
nonBundleTest('ReactHighstock', 'StockChart', 'highcharts/highstock');
nonBundleTest('ReactHighmaps', 'Map', 'highcharts/highmaps');



