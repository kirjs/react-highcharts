import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {getData} from "../../reducer/ducks/charts"
import {connect} from "react-redux";

class AreaTrue extends Component {

  getAreaData = (e) => {
    e.preventDefault();
    const {getData} = this.props;
    getData();
  }

  state = {
    config: {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{

      }]

    },
    configUpdate:{
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    },
    beforeConfigUpdate : {
      series: [{
        colorByPoint: false,

      }]
    }
  };

  componentWillReceiveProps(newProps){
    //console.log(newProps);
      this.setState({configUpdate:{
          series: [{
            data: newProps.charts
          }]
        },

      })


  }


  render() {

    const {charts,type} = this.props;

    const config = {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{

      }]

    };

    const configUpdate = {
      series: [{
        data: charts
      }]

    }

    const beforeConfigUpdate = {
      series: [{
        colorByPoint: false,
        type
      }]
    }

    return (
      <div>
        <ReactHighcharts
                      isPureConfig
                      configUpdate={this.state.configUpdate}
                      config={this.state.config}> </ReactHighcharts>
        <button onClick={this.getAreaData}>Get New Data</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    charts: state.charts.data,
    type:state.charts.type
  }
}, {getData})(AreaTrue)