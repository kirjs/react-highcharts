import React, {Component} from 'react';
/* eslint-disable */

class Sub extends Component {

  strip(children) {

    let re = new RegExp("([\\t ]*" + "{(.*?)" + "\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/" + "(.*?)}" + "[\\t ]*\\r?\\n?)", "g");
    let re2 = new RegExp("([\\t ]*\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/[\\t ]*\\r?\\n?)", "g");
    let result = children[1].replace(re, "");
    result = result.replace(re2, "");
    return result;
  }

  render() {
    let {children} = this.props;
    return <pre>{this.strip(children)}</pre>;
  }
}

export default Sub