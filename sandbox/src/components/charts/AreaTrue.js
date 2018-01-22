import React, {Component} from 'react';
import ReactHUpdate from './ReactHUpdate'
import {getData} from "../../reducer/ducks/charts"
import {connect} from "react-redux";

class AreaTrue extends Component {

  getAreaData = (e) => {
    e.preventDefault();
    const {getData} = this.props;
    getData();
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
        <ReactHUpdate beforeConfigUpdate={beforeConfigUpdate}
                      configUpdate={configUpdate}
                      config={config}> </ReactHUpdate>
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