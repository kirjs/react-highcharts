react-highcharts
================
Highcharts component for react.

## Demo
* see [example of using react-highcharts](http://kirjs.github.io/react-highcharts/)
* see [example of using react-highcharts/more](http://kirjs.github.io/react-highcharts/more.html)

You can find the full code for the examples [here](https://github.com/kirjs/react-highcharts/tree/master/demo
)
## Installation
```bash
npm install react-highcharts --save
```

## Usage

```jsx

var React = require('react');
var Highcharts = require('react-highcharts');

var config = {
  /* HighchartsConfig */
};
React.render(<Highcharts config = {config}></Highcharts>, document.body);

```

## Using highcharts-more
Just require `require('react-highcharts/more');` instead of `react-highcharts`
