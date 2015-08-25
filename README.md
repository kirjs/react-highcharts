react-highcharts
================
Highcharts component for react.

## Demo
* see [example of using react-highcharts](http://kirjs.github.io/react-highcharts/)
* see [example of using react-highcharts/more](http://kirjs.github.io/react-highcharts/more.html)

You can find the full code for the examples [here](https://github.com/kirjs/react-highcharts/tree/master/demo)

To run the demo, clone the repo, then run:
```
npm install
npm run demo
```

## Installation
```bash
npm install react-highcharts --save
```

## Usage

#### Basic Usage
```jsx
var React = require('react');
var Highcharts = require('react-highcharts');

var config = {
  /* HighchartsConfig */
};
React.render(<Highcharts config = {config}></Highcharts>, document.body);
```

#### Accessing Highcharts API After Render
For access to methods & properties from the Highcharts library you can use `Highcharts.Highcharts`. For example, the Highcharts options are available via `Highcharts.Highcharts.getOptions()`.

Highcharts provides an API for manipulating a chart after the initial render. See the **Methods and Properties** in [the documentation](http://api.highcharts.com/highcharts). Here's how you access it:

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series.addPoint({x: 10, y: 12});
  }

  render() {
    return <Highcharts config={config} ref="chart"></Highcharts>;
  }
}
```

#### Limiting Highchart Rerenders
Rerendering a highcharts graph is expensive. You can pass in a `isPureConfig` option to the `Highcharts` component, which will keep the highcharts graph from being updated so long as the provided `config` is [referentially equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) to its previous value.

## Using highcharts-more
Just require `require('react-highcharts/more');` instead of `react-highcharts`

## Update Highcharts Version

 1. Install new highcharts version.
    ```
    npm unistall highcharts-release --save-dev
    npm install highcharts-release --save-dev
    ```
    
 2. Increment the version such that a patch, minor release, or major release of 
    higcharts is reflected in a corresponding library version bump.
