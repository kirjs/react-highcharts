import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts'
import {getData} from "../../reducer/ducks/charts"
import {connect} from "react-redux";

class Area extends Component {

  getAreaData = (e) => {
    e.preventDefault();
    const {getData} = this.props;
    getData();
  }

  render() {

    const {charts} = this.props;

    const config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: charts
      }]
    };


    return (
      <div>
        <ReactHighcharts config={config}> </ReactHighcharts>
        <button onClick={this.getAreaData}>Get New Data</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    charts: state.charts.data,
  }
}, {getData})(Area)