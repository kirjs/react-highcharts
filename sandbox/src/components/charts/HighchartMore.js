import React, {Component, Fragment} from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts/highcharts-more';/* strip-start */
import CodeWrapper from "./CodeWrapper";
/* eslint-disable */
/* strip-end */

HighchartsMore(ReactHighcharts.Highcharts);

class HighchartMore extends Component {
  state = {
    config: {
      chart: {
        polar: true
      },
      title: {
        text: 'Highcharts-more'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    }
  };

  render() {
    const {config} = this.state;
    return (
      <Fragment>
        <ReactHighcharts config={config}> </ReactHighcharts>{/* strip-start */}
        <CodeWrapper code={require("!!raw-loader!./HighchartMore.js")}/>
        {/* strip-end */}
      </Fragment>
    );
  }
}

export default HighchartMore