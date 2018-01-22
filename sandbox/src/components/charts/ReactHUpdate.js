import React, {Component} from 'react';
import highcharts from "highcharts";
import merge from 'lodash/merge'
/* eslint-disable */
const win = typeof global === 'undefined' ? window : global;


class ReactHUpdate extends Component {
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
    console.log('chartConfig', chartConfig)
    this.chart = new this.Highcharts[this.chartType]({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.chartRef
      }
    }, this.props.callback);

    if (this.props.reflow) {

      win && win.requestAnimationFrame && requestAnimationFrame(() => {
        this.chart && this.chart.options && this.chart.reflow();
      });
    }
  }

  renderMergeObjects(mergeObjects) {
    let configMerge = {};
    mergeObjects.forEach((item) => {
      if (Object.prototype.toString.call(item.obj) === '[object Object]') {

        configMerge = merge(item.obj, configMerge);
      } else {

        throw new Error(`${item.name} should be the object {...}`);
      }
    })
    this.renderChart(configMerge);
  }

  shouldComponentUpdate(nextProps) {

    if (nextProps.neverRender) {
      return false;
    }

    if (nextProps.configUpdate || nextProps.beforeConfigUpdate){
      if (nextProps.configUpdate && nextProps.beforeConfigUpdate) {
        this.chart.update(nextProps.beforeConfigUpdate);
        setTimeout(() => this.chart.update(nextProps.configUpdate), 10);
        return true;

      } else if (nextProps.configUpdate) {

        this.chart.update(nextProps.configUpdate);
        return true;

      } else if (nextProps.beforeConfigUpdate) {

        this.chart.update(nextProps.beforeConfigUpdate);
        return true;
      }
    }


    if (nextProps.isPureConfig && this.props.config === nextProps.config) {
      this.renderChart(nextProps.config);
      console.log('return true');
      return true;
    }

    this.renderChart(nextProps.config);
    console.log('return false');
    return false;
  }

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  }

  componentDidMount() {
    const {config, configUpdate, beforeConfigUpdate} = this.props

    if (configUpdate || beforeConfigUpdate) {

      if (configUpdate && beforeConfigUpdate) {

        this.renderMergeObjects([{name: 'this.props.configUpdate', obj: configUpdate},
          {name: 'this.props.beforeConfigUpdate', obj: beforeConfigUpdate},
          {name: 'this.props.config', obj: config}
        ])

      } else if (configUpdate) {

        this.renderMergeObjects([{name: 'this.props.configUpdate', obj: configUpdate},
          {name: 'this.props.config', obj: config}
        ])

      } else if (beforeConfigUpdate) {

        this.renderMergeObjects([{name: 'this.props.beforeConfigUpdate', obj: beforeConfigUpdate},
          {name: 'this.props.config', obj: config}
        ])
      }
    } else {
      this.renderChart(config);
    }


  }

  componentWillUnmount() {
    console.log('this.chart.destroy();')
    this.chart.destroy();
  }

  render() {
    return <div ref={this.setChartRef.bind(this)} {...this.props.domProps} />;
  }
}

ReactHUpdate.defaultProps = {
  callback: () => {
  },
  domProps: {}
};


export default ReactHUpdate