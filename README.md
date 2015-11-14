react-highcharts
================

[![Build Status](https://travis-ci.org/kirjs/react-highcharts.svg?branch=master)](https://travis-ci.org/kirjs/react-highcharts)

Highcharts component for react.

## Demo
* see [example of using react-highcharts](http://kirjs.github.io/react-highcharts/)
* see [example of using react-highcharts/more](http://kirjs.github.io/react-highcharts/more.html)
* see [example of using react-highcharts/highstock](http://kirjs.github.io/react-highcharts/highstock.html)
* see [example of using react-highcharts/highmaps](http://kirjs.github.io/react-highcharts/highmaps.html)

You can find the full code for the examples [here](https://github.com/kirjs/react-highcharts/tree/master/demo)

To run the demo:

 1. Clone the repo
 2. run:
    ```
    npm install
    npm run demo
    ```
 3. Point your browser at http://localhost:8080

## Installation
If you are using `React@0.14` just do this:
```bash
npm install react-highcharts --save
```
For `React@0.13` use: 
```bash
npm install react-highcharts@^3.0.0 --save
```

## Usage
#### Basic Usage

```jsx
var React = require('react');
var ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code. 

var config = {
  /* HighchartsConfig */
};
React.render(<ReactHighcharts config = {config}></ReactHighcharts>, document.body);
```

#### Bundled Usage (includes Highcharts) 
```jsx
var React = require('react');
var ReactHighcharts = require('react-highcharts/bundle/highcharts'); // Highcharts is bundled 

var config = {
  /* HighchartsConfig */
};
React.render(<ReactHighcharts config = {config}></ReactHighcharts>, document.body);
```

#### Accessing Highcharts API After Render
For access to methods & properties from the Highcharts library you can use `ReactHighcharts.Highcharts`. For example, the Highcharts options are available via `ReactHighcharts.Highcharts.getOptions()`.

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

## Using highmaps
Require Highmaps first, and then `require('react-highcharts/highmaps');`
Or use bundled version:  `require('react-highcharts/bundle/highmaps');`
* see [the demo](http://kirjs.github.io/react-highcharts/highmaps.html)

## Using highstock
Require Highstock first, and then `require('react-highcharts/highstock');`
Or use bundled version:  `require('react-highcharts/bundle/highstock');`
* see [the demo](http://kirjs.github.io/react-highcharts/highstock.html)

## Using highcharts modules/add-ons like exporting, data, etc.
Everything related to modules was moved out of `react-highcharts`. 
Now every highcharts module is published as a separate npm package. 
You can find the full list list [here](https://github.com/kirjs/publish-highcharts-modules/blob/master/modules.md)
* see [the demo](http://kirjs.github.io/react-highcharts/more.html)

## For Contributors
### Update Highcharts Version 
 1. Install new highcharts version.
    ```
    npm unistall highcharts-release --save-dev
    npm install highcharts-release --save-dev
    ```
    
 2. Increment the `react-highcharts` version such that a patch, minor release, or major release of 
    Higcharts is reflected in a corresponding version increase for `react-highcharts`.

#### Running tests
Run `npm tests`
