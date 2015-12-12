var React = require('react');

if(typeof Highcharts === 'undefined'){
  throw Error('Starting with version 3 of react-highcharts, Highcharts is not bundled by default. ' +
    ' use "react-highcharts/dist/bundle/highcharts" instead, or include highcharts. '
  );
}

module.exports = function (Highcharts, chartType) {
  var displayName = 'Highcharts' + chartType;
  var result = React.createClass({
    displayName: displayName,

    propTypes: {
      config: React.PropTypes.object.isRequired,
      isPureConfig: React.PropTypes.bool
    },

    renderChart: function (config) {
      if (!config) {
        throw new Error('Config must be specified for the ' + displayName + ' component');
      }
      let chartConfig = config.chart;
      this.chart = new Highcharts[chartType]({
        ...config,
        chart: {
          ...chartConfig,
          renderTo: this.refs.chart
        }
      });
    },

    shouldComponentUpdate(nextProps) {
      if (!this.props.isPureConfig || !(this.props.config === nextProps.config)) {
        this.renderChart(nextProps.config);
        return true;
      }
      return false;
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

  result.Highcharts = Highcharts;
  return result;
};

