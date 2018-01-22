import React, {Component} from 'react';
import highcharts from "highcharts";
/* eslint-disable */
const win = typeof global === 'undefined' ? window : global;


class ReactHAnimation extends Component {
  constructor() {
    super();
    this.chartType = 'Chart';
    this.Highcharts = highcharts;
    this.displayName = 'Highcharts' + 'Chart';
  }

  setChartRef(chartRef) {
    this.chartRef = chartRef;
  }

  renderChart(config) {
    if (!config) {
      throw new Error('Config must be specified for the ' + this.displayName + ' component');
    }
    const chartConfig = config.chart;
    this.chart = new this.Highcharts[this.chartType]({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.chartRef
      }
    }, this.props.callback);

    if (this.props.reflow) {
      win && win.requestAnimationFrame && requestAnimationFrame(() => {
        this.chart && this.chart.options && this.chart.reflow()
      });
    }
  }

  shouldComponentUpdate(nextProps) {

    if(nextProps.neverRender){
      return false;
    }

    if (nextProps.isPureConfig && this.props.config === nextProps.config) {
      console.log('return false');
      return true;
    }
    this.renderChart(nextProps.config);
    console.log('return true')
    return true;
  }

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.renderChart(this.props.config);
  }

  componentWillUnmount() {
    console.log('this.chart.destroy();')
    this.chart.destroy();
  }

  render() {
    return <div ref={this.setChartRef.bind(this)} {...this.props.domProps} />;
  }
}

ReactHAnimation.defaultProps = {
  callback: () => {
  },
  domProps: {}
};



export default ReactHAnimation