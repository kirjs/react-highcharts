import React, {Component} from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock'
import {getDataST} from "../../reducer/ducks/charts"
import {connect} from "react-redux";
import Sub from "./Sub";
/* eslint import/no-webpack-loader-syntax: off */
import HS from '!!raw-loader!./Highstock.js';
import 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism'

class Highstock extends Component {

  getStData = (e) => {
    e.preventDefault();
    const {getDataST} = this.props;
    getDataST();
  }

  render() {

    const {charts} = this.props;

    const config = {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        name: 'AAPL',
        data: charts,
        tooltip: {
          valueDecimals: 2
        }
      }]
    };

    return (
      <div>
        <ReactHighstock config={config}> </ReactHighstock>
        <button onClick={this.getStData}>Get New Data Highstock</button>
        <PrismCode component="pre" className="language-javascript">
          <Sub subFilter={["import HS from '!!raw-loader!./Highstock.js';",
            "import PrismCode from 'react-prism'",
            "import 'prismjs';",
            "import 'prismjs/themes/prism.css';",
            "/* eslint-disable */",
            "import Sub from \"./Sub\";" ]} > {HS +""}
            </Sub>
        </PrismCode>

      </div>
    );
  }
}

export default connect((state) => {
  return {
    charts: state.charts.dataSt,
  }
}, {getDataST})(Highstock)