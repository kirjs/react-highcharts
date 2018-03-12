const indexJs = fileName => `import React, { Component } from 'react';
import { render } from 'react-dom';
import ${fileName} from './${fileName}';

class App extends Component {

  render() {
    return <${fileName}/>
  }
}

render(<App />, document.getElementById('root'));
`;

export default indexJs;
