const React = require('react');
// Note that HighMaps has to be in the codebase already
const ReactHighmaps = require('react-highcharts/ReactHighmaps.src');
const Highlight = require('react-highlight');
const ReactDOM = require('react-dom');
const maps = require('./mapdata/europe');

const config = {
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
            return {code: code};
        })
    }, {
        name: 'UTC + 1',
        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
            'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
            return {code: code};
        })
    }]
};

ReactDOM.render(
    <ReactHighmaps config={config} />,
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

require("file-loader?name=[name].[ext]!./highmaps.html");

