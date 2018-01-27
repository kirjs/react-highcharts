import React, {Component} from 'react';
/* eslint-disable */

class Sub extends Component {

  render() {

function getD(children) {
  let re = new RegExp("([\\t ]*"+ "{(.*?)" +"\\/\\* ?" + 'Sub-disable-start' + ")[\\s\\S]*?(" + 'Sub-disable-stop' + " ?\\*\\/" + "(.*?)}" + "[\\t ]*\\r?\\n?)", "g");

  let re2 = new RegExp("([\\t ]*\\/\\* ?" + 'Sub-disable-start' + ")[\\s\\S]*?(" + 'Sub-disable-stop' + " ?\\*\\/[\\t ]*\\r?\\n?)", "g");

  let newstr = children[1].replace(re, "");
  newstr = newstr.replace(re2, "");
  return newstr;

}

    let {children} = this.props;
    return (
      <div>
        <pre>{getD(children)}</pre>
      </div>
    );
  }
}

export default Sub