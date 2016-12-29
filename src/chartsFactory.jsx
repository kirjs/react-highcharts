var React = require('react');
var win = typeof global === 'undefined' ? window : global;

module.exports = function (chartType, Highcharts){
  var displayName = 'Highcharts' + chartType;
  var result = React.createClass({
    displayName: displayName,

    propTypes: {
      config: React.PropTypes.object.isRequired,
      isPureConfig: React.PropTypes.bool,
      neverReflow: React.PropTypes.bool,
      callback: React.PropTypes.func,
      domProps: React.PropTypes.object
    },

    defaultProps: {
      callback: () =>{},
      domProps: {}
    },

    renderChart: function (config){
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
      }, this.props.callback);

      if (!this.props.neverReflow) {
        win && win.requestAnimationFrame && requestAnimationFrame(()=>{
          this.chart && this.chart.options && this.chart.reflow();
        });
      }
    },

    shouldComponentUpdate(nextProps) {
      if (nextProps.neverReflow || (nextProps.isPureConfig && this.props.config === nextProps.config)) {
        return true;
      }
      this.renderChart(nextProps.config);
      return false;
    },

    getChart: function (){
      if (!this.chart) {
        throw new Error('getChart() should not be called before the component is mounted');
      }
      return this.chart;
    },

    componentDidMount: function (){
      this.renderChart(this.props.config);
    },

    componentWillUnmount() {
      this.chart.destroy();
    },

    render: function (){
      return <div ref="chart" {...this.props.domProps} />;
    }
  });

  result.Highcharts = Highcharts;
  result.withHighcharts = (Highcharts) =>{
    return module.exports(chartType, Highcharts);
  };
  return result;
};

