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

## Rendering react-highcharts on node.
There is no simple way to render Highcharts in node, so contributions are welcome to this section.

At this point the simplest solution would be to have a node-specific `Highcharts`
 [version](https://github.com/kirjs/react-highcharts/blob/master/src/fakeHighcharts.js)
 which would do nothing but return an empty `div` when rendered.

```javascript
// In the browser Highcharts comes from the outside. In node we load fake highcharts.
if(!Highcharts){
  global.highcharts = require('react-highcharts/src/fakeHighcharts.js');  
}
```
Browser will have real Highcharts instead, and would rerender the chart on top of it.

## Resize react-highcharts when printing website.
Since highcharts doesn't reflow upon print media query. Wrap your chart in `RedrawOnPrint` component.

```jsx
  import ReactHighcharts from 'react-highcharts/bundle/highcharts';
  import RedrawOnPrint from 'react-highcharts/RedrawOnPrint';

  class MyComponent extends React.Component {
    render() {
      return (
        <RedrawOnPrint>
          <ReactHighcharts config = {config} />
        </RedrawOnPrint>
      );
    }
  }
```
