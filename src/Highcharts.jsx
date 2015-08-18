global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
var Highcharts = require("exports?Highcharts!highcharts");

var React = require('react');

module.exports = React.createClass({
  displayName: 'Highcharts',

  renderChart: function () {
    if (!this.props.config) {
      throw new Error('Config must be specified for the Highchart component');
    }
    var config = this.props.config;
    let chartConfig = config.chart;
    this.chart = new Highcharts.Chart({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart.getDOMNode()
      }
    });
  },

  getChart: function () {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  },

  componentDidMount: function () {
    this.renderChart();
  },

  componentDidUpdate: function () {
    this.renderChart();
  },

  render: function () {
    let props = this.props;
    props = {
      ...props,
      ref: 'chart'
    };
    return <div {...props} />;
  }
});

module.exports.Highcharts = Highcharts;