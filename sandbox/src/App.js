import React, {Component} from 'react';
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
        color:'rgb(72, 70, 91)'
      }
    })
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                <AppBar
                  className={'menus'}
                  title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <LeftMenu/>
                <div className='ContentStyle'>
                  <Routes/>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
