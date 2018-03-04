import React, {Component, Fragment} from 'react';
import PrismCode from 'react-prism'
import styled from "styled-components";
import PropTypes from 'prop-types';

const StackblitzIframe = styled.iframe`
  width: 100%;
  height: 550px;
`;

class CodeWrapper extends Component {
  render() {
    let {url, children} = this.props;
    return (
      <Fragment>
        <StackblitzIframe src={url}/>
        <PrismCode component="pre" className="language-javascript">
          {children}
        </PrismCode>
      </Fragment>
    );
  }
}

CodeWrapper.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default CodeWrapper