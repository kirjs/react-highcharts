import React, {Component, Fragment} from 'react';
import ReactHighcharts from 'react-highcharts';
/* strip-start */
import Sub from "./Sub";
/* eslint-disable */
import PrismCode from 'react-prism'
/* strip-end */

class Highchart extends Component {

  state = {
    config: {
      title: {
        text: 'Highcharts'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    }
  };

  render() {
    const {config} = this.state;
    return (
      <Fragment>
        <ReactHighcharts config={config}> </ReactHighcharts>
        {/* strip-start */}
        <PrismCode component="pre" className="language-javascript">
          <Sub>  {require("!!raw-loader!./Highchart.js") + ""} </Sub>
        </PrismCode>
        {/* strip-end */}
      </Fragment>
    );
  }
}

export default Highchart;