global.HighchartsAdapter = require('exports?HighchartsAdapter!Highcharts/js/adapters/standalone-framework.src');
var Highcharts = require('exports?Highcharts!Highcharts/js/highstock.src');
var React = require('react');
var update = require('react/addons').addons.update;
module.exports = React.createClass({
  displayName: 'Highcharts',

  getDefaultProps: function() {
    return {
      stock: false
    };
  },

  renderChart: function () {
    if (!this.props.config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }

    var config = this.props.config;
    var node = this.refs.chart.getDOMNode();

    if (!config.chart) {
      config = update(config, {chart: {$set: {}}})
    }

    config = update(config, {chart: {renderTo: {$set: node}}});

    if(this.props.stock) {
      new Highcharts.StockChart(config);
    } else {
      new Highcharts.Chart(config);
    }
  },

  componentDidMount: function () {
    this.renderChart();
  },
  componentDidUpdate: function () {
    this.renderChart();
  },
  render: function () {
    return <div className = "chart" ref = "chart" />
  }
});

module.exports.Highcharts = Highcharts;
