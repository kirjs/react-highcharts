var React = require('react');
var createReactClass = require('create-react-class');

var RedrawOnPrint = createReactClass({
  componentDidMount() {
    // This is a listiner bind to the print media query
    // it call reflow since highcharts doesn't reflow upon print
    // http://stackoverflow.com/questions/32821003/redraw-resize-highcharts-when-printing-website
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(this._reflowChildren);
    }
  },

  componentWillUnmount() {
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.removeListener(this._reflowChildren);
    }
  },

  _reflowChildren() {
    this.children.map((child) =>{
      if (!child || !child.chart) {
        throw new Error('RedrawOnPrint child should be a highcharts');
      }
      child.chart.reflow();
    });
  },

  render() {
    this.children = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            ref: (c) => c && this.children.push(c)
          })
        })}
      </div>
    );
  }
});

module.exports = RedrawOnPrint;
