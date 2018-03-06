import React, {Component} from 'react';
import CodeWrapper from './CodeWrapper';

const code = `import React, { Component } from 'react';
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
    const {config} = this.state;
    return <ReactHighcharts config={config}/>
  }
}

export default Highchart`;

class Highchart extends Component {
  render() {
    const files ={
      'Highchart.js':code,
    };
    return  <CodeWrapper files={files} name='Highchart'>
      {code}
    </CodeWrapper>
  }
}

export default Highchart