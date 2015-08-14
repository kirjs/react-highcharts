global.HighchartsAdapter = require('exports?HighchartsAdapter!Highcharts/js/adapters/standalone-framework.src');
var Highcharts = require('exports?Highcharts!Highcharts');
var React = require('react');
var update = require('react/addons').addons.update;
module.exports = React.createClass({
  displayName: 'Highcharts',

  renderChart: function () {
    if (!this.props.config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }

    var config = this.props.config;
    var type = this.props.type;
    var node = this.refs.chart.getDOMNode();

    if (!config.chart) {
      config = update(config, {chart: {$set: {}}})
    }

    config = update(config, {chart: {renderTo: {$set: node}}});

    if (type == 'map') {
      this.chart = new Highcharts.Map(config);
    } else {
      this.chart = new Highcharts.Chart(config);
    }
  },

  getChart: function() {
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
    return <div className = "chart" ref = "chart" />
  }
});

module.exports.Highcharts = Highcharts;