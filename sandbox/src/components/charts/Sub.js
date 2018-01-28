import React, {Component} from 'react';
import PrismCode from 'react-prism'
/* eslint-disable */

class Sub extends Component {

  strip(text) {

    let re = new RegExp("([\\t ]*" + "{(.*?)" + "\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/" + "(.*?)}" + "[\\t ]*\\r?\\n?)", "g");
    let re2 = new RegExp("([\\t ]*\\/\\* ?" + 'strip-start' + ")[\\s\\S]*?(" + 'strip-end' + " ?\\*\\/[\\t ]*\\r?\\n?)", "g");
    let result = text.replace(re, "");
    result = result.replace(re2, "");
    return result;
  }

  render() {
    let {text} = this.props;
    return(
      <PrismCode component="pre" className="language-javascript">
        {this.strip(text)}
      </PrismCode>
      );
  }
}

export default Sub