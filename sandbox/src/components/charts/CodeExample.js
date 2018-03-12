import React, { Component } from "react";
import PrismCode from "react-prism";
import PropTypes from "prop-types";
import sdk from "@stackblitz/sdk";

class CodeWrapper extends Component {
  componentDidMount() {
    const { files, nameMainFile } = this.props;
    let file = {};
    file["index.js"] = `import React, { Component } from 'react';
import { render } from 'react-dom';
import ${nameMainFile} from './${nameMainFile}';

class App extends Component {

  render() {
    return <${nameMainFile}/>
  }
}

render(<App />, document.getElementById('root'));
`;
    file["index.html"] = '<div id="root"> </div>';
    const project = {
      files: { ...files, ...file },
      title: `React-Highcharts`,
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
    this.sdk = sdk.embedProject(this.stackblitz, project, {
      height: 550,
      width: "100%",
      forceEmbedLayout: true,
      openFile: `${nameMainFile}.js`,
      view: "preview"
    });
  }

  componentWillUpdate(nextProps) {
    const { files, nameMainFile } = nextProps;
    let file = {};
    file["index.js"] = `import React, { Component } from 'react';
import { render } from 'react-dom';
import ${nameMainFile} from './${nameMainFile}';

class App extends Component {

  render() {
    return <${nameMainFile}/>
  }
}

render(<App />, document.getElementById('root'));
`;
    this.sdk.then(vm => {
      vm.applyFsDiff({
        create: { ...file, ...files }
      });
      vm.editor.openFile(`${nameMainFile}.js`);
    });
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
  nameMainFile: PropTypes.string.isRequired
};

export default CodeWrapper;
