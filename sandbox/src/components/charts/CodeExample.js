import React, { Component } from "react";
import PrismCode from "react-prism";
import PropTypes from "prop-types";
import sdk from "@stackblitz/sdk";
import indexJs from "./indexJs";

class CodeWrapper extends Component {
  componentDidMount() {
    const { files, fileName } = this.props;
    const file = {
      "index.js": indexJs(fileName),
      "index.html": '<div id="root"> </div>'
    };
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
      openFile: `${fileName}.js`,
      view: "preview"
    });
  }

  componentWillUpdate({ files, fileName }) {
    const file = { "index.js": indexJs(fileName) };
    this.sdk.then(vm => {
      vm.applyFsDiff({
        create: { ...file, ...files }
      });
      vm.editor.openFile(`${fileName}.js`);
    });
  }

  render() {
    let { code } = this.props;
    return (
      <div>
        <div ref={sb => (this.stackblitz = sb)} />
        <PrismCode component="pre" className="language-javascript">
          {code}
        </PrismCode>
      </div>
    );
  }
}

CodeWrapper.propTypes = {
  files: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired
};

export default CodeWrapper;
