# React-highcharts recipes

## Using with highcharts-release package
Thanks [@mblakele](https://github.com/mblakele) for writing this out.

First install both libraries: 
```bash
npm install highcharts-release --save
npm install react-highcharts --save	
```

Now use them together: 

```jsx
var React = require('react');	

// With webpack you may wish to alias this as 'highcharts-release'
var Highcharts = require('highcharts-release/highcharts.src.js'); 

// Expects that Highcharts was loaded in the code.
var ReactHighcharts = require('react-highcharts'); 
 
var config = {
  /* HighchartsConfig */		
};

React.render(<Highcharts config = {config}></Highcharts>, document.body);		
```
