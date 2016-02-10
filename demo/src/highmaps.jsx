var React = require('react');
global.Highcharts = require("highcharts/highmaps");
var ReactHighmaps = require('react-highcharts/ReactHighmaps');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');
require('./mapdata/europe');

var config = {
  chart: {
    spacingBottom: 20
  },
  title : {
    text : 'Europe time zones'
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
      mapData: Highcharts.maps['custom/europe'],
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series : [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map( function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
      'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }  ]
};

ReactDOM.render(
  <ReactHighmaps config={config}></ReactHighmaps>,
  document.getElementById('test')
);

ReactDOM.render(
  <Highlight className="jsx">{require("raw-loader!./highmaps.jsx")}</Highlight>,
  document.getElementById('code-js')
);

ReactDOM.render(
  <Highlight className="html">{require("raw-loader!./highmaps.html")}</Highlight>,
  document.getElementById('code-html')
);

require("file?name=[name].[ext]!./highmaps.html");

