import React, {Component} from 'react';
import PrismCode from 'react-prism'
import stripByComment from 'strip-by-comment';
/* eslint-disable */

class CodeView extends Component {

  render() {
    let {text} = this.props;
    return(
      <PrismCode component="pre" className="language-javascript">
        {stripByComment(text)}
      </PrismCode>
    );
  }
}

export default CodeView