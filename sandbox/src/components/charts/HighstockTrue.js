import React, {Component} from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock'
import {getDataST} from "../../reducer/ducks/charts"
import {connect} from "react-redux";

class HighstockTrue extends Component {

  getStData = (e) => {
    e.preventDefault();
    const {getDataST} = this.props;
    getDataST();
  }

  render() {

    const {charts} = this.props;

    const config = {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        name: 'AAPL',
        data: charts,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };

    return (
      <div>
        <ReactHighstock config={config} neverReflow={true}> </ReactHighstock>
        <button onClick={this.getStData}>Get New Data Highstock</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    charts: state.charts.dataSt,
  }
}, {getDataST})(HighstockTrue)