import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts'
import {getData} from "../../reducer/ducks/charts"
import {connect} from "react-redux";

class AreaTrue extends Component {

  getAreaData = (e) => {
    const {getData} = this.props;
    getData();
  }


  shouldComponentUpdate(nextProps) {
    const { charts } = nextProps
    let chart = this.refs.chart.getChart();
    chart.series[0].update({
      data: charts
    });
    return false
  }



  render() {

    const {charts} = this.props;

    const config = {

      xAxis: {
        categories: this.props.categories
      },
      series: [{
        data: this.props.charts,
        showInLegend: false,
        type: 'area',
      }]
    };

    return (
      <div>
        <ReactHighcharts   config={config} ref='chart'> </ReactHighcharts>
        <button onClick={this.getAreaData}>Get New Data</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    charts: state.charts.data,
    categories:state.charts.categories
  }
}, {getData})(AreaTrue)