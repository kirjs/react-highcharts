var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');

// Note that Highcharts has to be in the codebase already
// Highcharts more
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);

// Highcharts exporting
var HighchartsExporting = require('highcharts-exporting');
HighchartsExporting(ReactHighcharts.Highcharts);
var ReactDOM = require('react-dom');

require('prismjs');
require('prismjs/themes/prism.css');
import PrismCode from 'react-prism'

import './style.css'
import './tomorrow.css'


var config = {
    chart: {
        polar: true
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
};

ReactDOM.render(
    <ReactHighcharts config={config}> </ReactHighcharts>,
    document.getElementById('test')
);
ReactDOM.render(
    <PrismCode component="pre" className="language-javascript">{require("!!raw-loader!./more.jsx")}</PrismCode>,
    document.getElementById('code-js')
);
ReactDOM.render(
    <PrismCode component="pre" className="language-markup">{require("raw-loader!./more.html")}</PrismCode>,
    document.getElementById('code-html')
);
