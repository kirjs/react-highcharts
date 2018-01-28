import React, {Component, Fragment} from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
/* strip-start */
import Sub from "./Sub";
/* eslint-disable */
import PrismCode from 'react-prism'
/* strip-end */
import maps from 'europe';

class Highmaps extends Component {

state = {
  config:{
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
    return (
      <Fragment>
        <ReactHighmaps config={config}> </ReactHighmaps>
        {/* strip-start */}
        <PrismCode component="pre" className="language-javascript">
          <Sub>  {require("!!raw-loader!./Highmaps.js") + ""} </Sub>
        </PrismCode>
        {/* strip-end */}
      </Fragment>
    );
  }
}

export default Highmaps