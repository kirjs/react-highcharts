const React = require('react');
// Note that Highcharts has to be required separately
const ReactHighcharts = require('react-highcharts');
const ReactDOM = require('react-dom');
require('prismjs');
require('prismjs/themes/prism.css');
import PrismCode from 'react-prism'

import './style.css'
import './tomorrow.css'

const config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

ReactDOM.render(
  <ReactHighcharts config={config}/>,
  document.getElementById('test')
);
ReactDOM.render(
  <PrismCode component="pre" className="language-javascript">{require("!!raw-loader!./index.jsx")}</PrismCode>,
  document.getElementById('code-js')
);
ReactDOM.render(
  <PrismCode component="pre" className="language-markup">{require("raw-loader!./index.html")}</PrismCode>,
  document.getElementById('code-html')
);

require("file-loader?name=[name].[ext]!./index.html");
require("file-loader?name=[name].[ext]!./more.html");

