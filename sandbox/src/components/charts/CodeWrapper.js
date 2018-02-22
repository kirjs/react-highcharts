import React, {Component} from 'react';
import PrismCode from 'react-prism'
import stripByComment from 'strip-by-comment';

class CodeWrapper extends Component {
  render() {
    let {code} = this.props;
    return(
      <PrismCode component="pre" className="language-javascript">
        {stripByComment(code)}
      </PrismCode>
    );
  }
}

export default CodeWrapper