var React = require('react');

module.exports = function (chartType, Highcharts){
  var displayName = 'Highcharts' + chartType;
  var result = React.createClass({
    displayName: displayName,

    propTypes: {
      config: React.PropTypes.object.isRequired,
      isPureConfig: React.PropTypes.bool,
      neverReflow: React.PropTypes.bool,
      callback: React.PropTypes.func
    },

    defaultProps: {
      callback: () =>{}
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
        global.requestAnimationFrame && requestAnimationFrame(()=>{
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
