import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {getData} from "../../reducer/ducks/charts";
import {connect} from "react-redux";

class Area extends Component {

  getAreaData = (e) => {
    e.preventDefault();
    const {getData} = this.props;
    getData();
  };

  state = {
    config: {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        type:'column',
        data: [176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    }
  };

  render() {

    const {charts} = this.props;

    const config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        type:'column',
        data: charts
      }]
    };


    return (
      <div>
        <ReactHighcharts  config={this.state.config}> </ReactHighcharts>
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