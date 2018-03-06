import React, {Component} from 'react';
import CodeWrapper from './CodeWrapper';

const code = `import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsMore(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts)

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
    return <ReactHighcharts config={config} />
  }
}

export default HighchartMore`;

class HighchartMore extends Component {
  render() {
    const files ={
      'HighchartMore.js':code,
    };

    return <CodeWrapper files={files} name='HighchartMore'>
      {code}
    </CodeWrapper>
  }
}

export default HighchartMore