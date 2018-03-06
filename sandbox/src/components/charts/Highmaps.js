import React, {Component} from 'react';
import CodeWrapper from './CodeWrapper';
import europe from 'europe'

const code = `import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import maps from './europe';

class Highmaps extends Component {
  state = {
    config: {
      chart: {
        spacingBottom: 20
      },
      title: {
        text: 'Europe time zones'
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        map: {
          allAreas: false,
          joinBy: ['iso-a2', 'code'],
          dataLabels: {
            enabled: true,
            color: 'white',
            style: {
              fontWeight: 'bold'
            }
          },
          mapData: maps,
          tooltip: {
            headerFormat: '',
            pointFormat: '{point.name}: <b>{series.name}</b>'
          }
        }
      },
      series: [{
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
          return { code: code };
        })
      }, {
        name: 'UTC + 1',
        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
          return { code: code };
        })
      }]
    }
  };

  render() {
    const {config} = this.state;
    return <ReactHighmaps config={config} />;
  }
}

export default Highmaps`;

class Highstock extends Component {

  render() {
    const files ={
      'Highmaps.js':code,
      'europe.js':europe
    };

    return <CodeWrapper files={files} name='Highmaps'>
      {code}
    </CodeWrapper>;
  }
}

export default Highstock