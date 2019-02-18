react-highcharts
================

[![Build Status](https://travis-ci.org/kirjs/react-highcharts.svg?branch=master)](https://travis-ci.org/kirjs/react-highcharts)

[Highcharts 6.x.x](https://www.highcharts.com/documentation/changelog) component for react.
For highcharts 5.x.x use v. 13.0.0

## Demos
[react-highcharts](http://kirjs.github.io/react-highcharts/)
| [react-highcharts/more](http://kirjs.github.io/react-highcharts/more.html)
| [react-highcharts/highstock](http://kirjs.github.io/react-highcharts/highstock.html)
| [react-highcharts/highmaps](http://kirjs.github.io/react-highcharts/highmaps.html)

You can also see [Code for the demo](https://github.com/kirjs/react-highcharts/tree/master/demo) and
 [run demo locally](https://github.com/kirjs/react-highcharts#running-demo)

## Installation

```bash
npm install react-highcharts --save
```

## Usage
#### Webpack/Browserify

```bash
npm install react-highcharts highcharts react --save
```

```jsx
const React = require('react');
const ReactDOM = require('react-dom');

const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

const config = {
  /* HighchartsConfig */
};

ReactDOM.render(<ReactHighcharts config = {config}></ReactHighcharts>, document.body);
```

#### Optional after-render callback
```jsx
const afterRender = (chart) => { /* do stuff with the chart  */ };
<ReactHighcharts config = {config} callback = {afterRender}></ReactHighcharts>
```

#### Passing properties to the wrapping DOM element
```jsx
<ReactHighcharts config = {config} domProps = {{id: 'chartId'}}></ReactHighcharts>
```

#### Accessing Highcharts API After Render
For access to methods & properties from the Highcharts library you can use `ReactHighcharts.Highcharts`.
For example, the Highcharts options are available via `ReactHighcharts.Highcharts.getOptions()`.

Highcharts provides an API for manipulating a chart after the initial render. See the **Methods and Properties** in [the documentation](http://api.highcharts.com/highcharts). Here's how you access it:

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 10, y: 12});
  }

  render() {
    return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
  }
}
```

#### Limiting Highchart Rerenders
Rerendering a highcharts graph is expensive. You can pass in a `isPureConfig` option to the `ReactHighcharts` component, which will keep the highcharts graph from being updated so long as the provided `config` is [referentially equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) to its previous value.
There is also `neverReflow` property.

#### Rendering on the server with node
See this [recipe](https://github.com/kirjs/react-highcharts/blob/master/recipes.md#rendering-react-highcharts-on-node)

## Using highmaps ([demo](http://kirjs.github.io/react-highcharts/highmaps.html))

```javascript
const ReactHighmaps = require('react-highcharts/ReactHighmaps');
```

## Using highstock ([demo](http://kirjs.github.io/react-highcharts/highstock.html))
```javascript
const ReactHighstock = require('react-highcharts/ReactHighstock')
```

## Using highcharts modules/add-ons like exporting, data, etc. ([demo](http://kirjs.github.io/react-highcharts/more.html))
Use `highcharts-more` npm package.
```javascript
const ReactHighcharts = require('react-highcharts')
require('highcharts-more')(ReactHighcharts.Highcharts)
```

You can find the full list [here](https://github.com/kirjs/publish-highcharts-modules/blob/master/modules.md)

## Passing Highcharts instance manually
```javascript
const ReactHighcharts = require('react-highcharts').withHighcharts(ReactHighstock)
```


## For Contributors
#### Running tests

Run `npm test`

#### Running demo

```bash
git clone https://github.com/kirjs/react-highcharts.git
cd react-highcharts && npm install
npm run demo
```
Point your browser at [http://localhost:8080](http://localhost:8080)
