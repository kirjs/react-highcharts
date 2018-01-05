import React, {Component} from 'react';
import PropTypes from 'prop-types';

const win = typeof global === 'undefined' ? window : global;

module.exports = function (chartType, Highcharts) {

    class Charts extends Component {
        constructor() {
            super()
            this.chartType = chartType;
            this.Highcharts = Highcharts;
            this.displayName = 'Highcharts' + chartType;
        }

        setChartRef = (chartRef) => {
            this.chartRef = chartRef;
        }

        renderChart(config) {
            if (!config) {
                throw new Error('Config must be specified for the ' + this.displayName + ' component');
            }
            let chartConfig = config.chart;
            this.chart = new this.Highcharts[this.chartType]({
                ...config,
                chart: {
                    ...chartConfig,
                    renderTo: this.chartRef
                }
            }, this.props.callback);

            if (!this.props.neverReflow) {
                win && win.requestAnimationFrame && requestAnimationFrame(() => {
                    this.chart && this.chart.options && this.chart.reflow();
                });
            }
        }

        shouldComponentUpdate(nextProps) {
            if (nextProps.neverReflow || (nextProps.isPureConfig && this.props.config === nextProps.config)) {
                return true;
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
            this.renderChart(this.props.config);
        }

        componentWillUnmount() {
            this.chart.destroy();
        }

        render() {
            return <div ref={this.setChartRef} {...this.props.domProps} />;
        }
    }

    Charts.propTypes = {
        config: PropTypes.object,
        isPureConfig: PropTypes.bool,
        neverReflow: PropTypes.bool,
        callback: PropTypes.func,
        domProps: PropTypes.object
    }

    Charts.defaultProps = {
        callback: () => {
        },
        domProps: {}
    }
    let result = Charts;
    result.Highcharts = Highcharts;
    result.withHighcharts = Highcharts => module.exports(chartType, Highcharts);

    return result
}