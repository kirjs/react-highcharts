global.HighchartsAdapter = require('exports?HighchartsAdapter!highcharts-standalone-adapter');
var Highcharts = require("exports?Highcharts!highcharts");

var React = require('react');

module.exports = React.createClass({
  displayName: 'Highcharts',

  propTypes: {
    config: React.PropTypes.object.isRequired,
    isPureConfig: React.PropTypes.bool
  },

  renderChart: function (config) {
    if (!config) {
      throw new Error('Config must be specified for the Highchart component');
    }
    let chartConfig = config.chart;
    this.chart = new Highcharts.Chart({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart.getDOMNode()
      }
    });
  },

  shouldComponentUpdate(nextProps) {
    if (!this.props.isPureConfig || !(this.props.config === nextProps.config)) {
      this.renderChart(nextProps.config);
    }
    return true;
  },

  getChart: function () {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  },

  componentDidMount: function () {
    this.renderChart(this.props.config);
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