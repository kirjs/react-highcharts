var React = require('react');

var RedrawOnPrint = React.createClass({
  componentDidMount: function (){
    // This is a listiner bind to the print media query
    // it call reflow since highcharts doesn't reflow upon print
    // http://stackoverflow.com/questions/32821003/redraw-resize-highcharts-when-printing-website
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(this._reflowChildren);
    }
  },

  componentWillUnmount: function (){
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.removeListener(this._reflowChildren);
    }
  },

  _reflowChildren() {
    if (this.children) {
      this.children.map((child) =>{
        if (!child || !child.chart) {
          throw new Error('RedrawOnPrint child should be a highcharts');
        }
        child.chart.reflow();
      });
    }
  },

  render: function (){
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            ref: (c) => {
              if (!this.children) {
                this.children = [];
                }
              this.children.push(c);
              }
            })
          })}
      </div>
    );
  }
});

module.exports = RedrawOnPrint;
