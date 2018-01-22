import React, {Component} from 'react';
import ReactHAnimation from './ReactHAnimation'
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
        type:'column',
        data: charts
      }]
    };


    return (
      <div>
        <ReactHAnimation config={config}> </ReactHAnimation>
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