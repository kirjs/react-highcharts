import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import logo from '../logo.svg';
import history from '../history'

class LeftMenu extends Component {

  handleRequestClose = (ev, local) => {
    history.push(local)
  };

  render() {
    const SelectableList = makeSelectable(List);
    const logoLeft = <img src={logo} className="App-logo" alt="logo"/>;

    return <div>

      <Drawer containerStyle={{background: '#efefef'}} open={true}>
        <AppBar
          className={'menus'}
          titleStyle={{color: 'rgb(114, 217, 250)', fontSize: 20}}
          showMenuIconButton={true}
          iconStyleLeft={{margin: "15px -3px 0px -5px"}}
          iconElementLeft={logoLeft}
          title="React-Highcharts"
        />
        <SelectableList value={history.location.pathname}>
          <Subheader style={{backgroundColor: 'rgb(245, 246, 247)'}}>

          </Subheader>

          <ListItem primaryText="Animation Chart" onClick={e => this.handleRequestClose(e, '/area')}
                    value={'/area'}
                    nestedItems={[]}

          />
          <ListItem primaryText="Update Chart" onClick={e => this.handleRequestClose(e, '/areatrue')}
                    value={'/areatrue'}
                    nestedItems={[]}

          />

          <ListItem primaryText="Highstock" onClick={e => this.handleRequestClose(e, '/highstock')}
                    value={'/highstock'}
                    nestedItems={[]}

          />
          <ListItem primaryText="Highstock Reflow=true" onClick={e => this.handleRequestClose(e, '/highstocktrue')}
                    value={'/highstocktrue'}
                    nestedItems={[]}

          />


        </SelectableList>
      </Drawer>
    </div>

  }
}

export default LeftMenu