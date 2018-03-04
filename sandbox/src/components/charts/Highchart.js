import React, {Component} from 'react';
import CodeWrapper from './CodeWrapper';

class Highchart extends Component {
  render() {
    return <CodeWrapper url={"https://stackblitz.com/edit/highcharts?embed=1&file=Highchart.js&view=preview"}>
      {`import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

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
    const { config } = this.state;
    return <ReactHighcharts config={config}/>
  }
}

export default Highchart`}
    </CodeWrapper>
  }
}

export default Highchart