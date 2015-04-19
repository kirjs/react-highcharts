global.HighchartsAdapter = require('exports?HighchartsAdapter!Highcharts/js/adapters/standalone-framework.src');
var Highcharts = require('exports?Highcharts!Highcharts');
require('exports!Highcharts/js/highcharts-more.src');
var React = require('react');
var update = require('react/addons').addons.update;
module.exports = React.createClass({
  displayName: 'Highcharts',

  renderChart: function () {
    if (!this.props.config) {
      throw newError('Config has to be specified, for the Highchart component')
    }

    var config = this.props.config;
    var node = this.refs.chart.getDOMNode();

    if (!config.chart) {
      config = update(config, {chart: {$set: {}}})
    }

    config = update(config, {chart: {renderTo: {$set: node}}});

    new Highcharts.Chart(config);
  },

  componentDidMount: function () {
    this.renderChart();
  },
  componentDidUpdate: function () {
    this.renderChart();
  },
  render: function () {
    return <div className="chart" ref="chart" />
  }
});