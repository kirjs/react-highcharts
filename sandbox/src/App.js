import React, {Component, Fragment} from 'react';
import Routes from './components/Routes'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftMenu from './components/LeftMenu'
import AppBar from 'material-ui/AppBar';
import history from './history'
import store from './store'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      appBar:{
        color:'#48465B'
      }
    });
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider muiTheme={muiTheme}>
              <Fragment>
                <AppBar/>
                <LeftMenu/>
                <div className='ContentStyle'>
                  <Routes/>
                </div>
              </Fragment>
            </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;