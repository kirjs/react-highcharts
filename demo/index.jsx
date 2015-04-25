var React = require('react');
var Highlight = require('react-highlight');
var Highcharts = require('react-highcharts');

var config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]

};
React.render(<Highcharts config = {config}></Highcharts>, document.getElementById('test'));
React.render(<Highlight className="jsx">{require("raw-loader!./index.jsx")}</Highlight>, document.getElementById('code-js'));
React.render(<Highlight className="html">{require("raw-loader!./dist/index.html")}</Highlight>, document.getElementById('code-html'));
