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
        data: this.props.charts

      }]

    },
    configUpdate:{

    },
    beforeConfigUpdate : {
      series: [{
        colorByPoint: false,

      }]
    }
  };

  componentWillReceiveProps(newProps){

    this.setState({configUpdate:{
        chart:{
          type:'column',
        },
        series: [{

          colorByPoint: true,

        }]
      },

    });

    //console.log(newProps);
    setTimeout(()=> this.setState({configUpdate:{
        series: [{
          data: newProps.charts
        }]
      },

    }))

  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextState);
    return true
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