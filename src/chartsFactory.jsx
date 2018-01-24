import React, {Component} from 'react';
import merge from 'lodash/merge';

const win = typeof global === 'undefined' ? window : global;

function chartsFactory(chartType, Highcharts) {

    class Chart extends Component {
        constructor() {
            super();
            this.chartType = chartType;
            this.Highcharts = Highcharts;
            this.displayName = 'Highcharts' + chartType;
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

        }

      renderMergeObjects(mergeObjects) {
        let configMerge = {};
        mergeObjects.forEach((item) => {
          if (Object.prototype.toString.call(item.obj) === '[object Object]') {

            configMerge = merge(item.obj, configMerge);
          } else {

            throw new Error(`${item.name} should be the object {...}`);
          }
        });
        this.renderChart(configMerge);
      }

      shouldComponentUpdate(nextProps) {

        if (nextProps.configUpdate || nextProps.beforeConfigUpdate){

          if (nextProps.isPureConfig && this.props.config === nextProps.config &&
            this.props.configUpdate === nextProps.configUpdate &&
            this.props.beforeConfigUpdate === nextProps.beforeConfigUpdate) {
            return false;
          }

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
          return false;
        }

        this.renderChart(nextProps.config);
        return false;
      }

        getChart() {
            if (!this.chart) {
                throw new Error('getChart() should not be called before the component is mounted');
            }
            return this.chart;
        }

      componentDidMount() {
        const {config, configUpdate, beforeConfigUpdate} = this.props;

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
            this.chart.destroy();
        }

        render() {
            return <div ref={this.setChartRef.bind(this)} {...this.props.domProps} />;
        }
    }

    if (isProdMode) {
        let PropTypes = require('prop-types');

        Chart.propTypes = {
            config: PropTypes.object,
            isPureConfig: PropTypes.bool,
            neverReflow: PropTypes.bool,
            callback: PropTypes.func,
            domProps: PropTypes.object
        }
    }
    Chart.defaultProps = {
        callback: () => {
        },
        domProps: {}
    };
    let result = Chart;
    result.Highcharts = Highcharts;
    result.withHighcharts = Highcharts => module.exports(chartType, Highcharts);

    return result
}

export default chartsFactory;