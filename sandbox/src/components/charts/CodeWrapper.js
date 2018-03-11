import React, { Component } from "react";
import PrismCode from "react-prism";
import PropTypes from "prop-types";
import sdk from "@stackblitz/sdk";

class CodeWrapper extends Component {
  componentDidMount() {
    const { name, files } = this.props;
    files["index.js"] = `import React, { Component } from 'react';
import { render } from 'react-dom';
import ${name} from './${name}';

class App extends Component {

  render() {
    return <${name}/>
  }
}

render(<App />, document.getElementById('root'));
`;
    files["index.html"] = '<div id="root"> </div>';
    const project = {
      files,
      title: "React-Highcharts",
      description: "React-Highcharts",
      template: "create-react-app",
      tags: ["stackblitz", "sdk", "React-Highcharts"],
      dependencies: {
        react: "16.2.0",
        "react-dom": "16.2.0",
        "react-highcharts": "16.0.2",
        highcharts: "6.0.7"
      }
    };
    sdk.embedProject(this.stackblitz, project, {
      height: 550,
      width: "100%",
      forceEmbedLayout: true,
      view: "preview"
    });
  }

  componentWillUnmount() {
    this.stackblitz = null;
  }

  render() {
    let { children } = this.props;
    return (
      <div>
        <div ref={sb => (this.stackblitz = sb)} />
        <PrismCode component="pre" className="language-javascript">
          {children}
        </PrismCode>
      </div>
    );
  }
}

CodeWrapper.propTypes = {
  files: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CodeWrapper;
