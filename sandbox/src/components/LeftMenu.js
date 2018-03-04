import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import logo from '../logo.svg';
import history from '../history';
import Routes from './Routes';
import 'prismjs';
import 'prismjs/themes/prism.css';
/* eslint-disable */
class LeftMenu extends Component {
  state = {
    urlPatch: '/react-highcharts'
  };

  handleOpenURL = (ev, local) => history.push(this.state.urlPatch + local);

  render() {
    const SelectableList = makeSelectable(List);
    const logoLeft = <img src={logo} className="App-logo" alt="logo"/>;
    const {urlPatch} = this.state;
    return <div>
      <Drawer containerStyle={{background: '#efefef'}} open={true}>
        <AppBar
          titleStyle={{color: 'rgb(114, 217, 250)', fontSize: 20}}
          showMenuIconButton={true}
          iconStyleLeft={{margin: "15px -3px 0px -5px"}}
          iconElementLeft={logoLeft}
          title="React-Highcharts"
        />
        <SelectableList value={history.location.pathname}>
          <ListItem primaryText="Highcharts" onClick={e => this.handleOpenURL(e, '/highchart')}
                    value={urlPatch + '/highchart'}
                    nestedItems={[<ListItem primaryText="Highcharts-More"
                                            onClick={e => this.handleOpenURL(e, '/highchartmore')}
                                            value={urlPatch + '/highchartmore'}/>
                    ]}
          />
          <ListItem primaryText="Highstock" onClick={e => this.handleOpenURL(e, '/highstock')}
                    value={urlPatch + '/highstock'}/>
          <ListItem primaryText="Highmaps" onClick={e => this.handleOpenURL(e, '/highmaps')}
                    value={urlPatch + '/highmaps'}/>
        </SelectableList>
      </Drawer>
      <div className='ContentStyle'>
        <Routes/>
      </div>

    </div>

  }
}

export default LeftMenu