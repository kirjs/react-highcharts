import React, {Component} from 'react';
/* eslint-disable */

class Sub extends Component {

  strip(children) {

    let re = new RegExp("([\\t ]*" + "{(.*?)" + "\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/" + "(.*?)}" + "[\\t ]*\\r?\\n?)", "g");
    let re2 = new RegExp("([\\t ]*\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/[\\t ]*\\r?\\n?)", "g");
    let newstr = children[1].replace(re, "");
    newstr = newstr.replace(re2, "");
    return newstr;
  }

  render() {
    let {children} = this.props;
    return <pre>{this.strip(children)}</pre>;
  }
}

export default Sub