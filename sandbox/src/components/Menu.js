import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

function Menu() {

  return <div>
    <AppBar
      className={'menus'}
      titleStyle={{color: 'rgb(114, 217, 250)'}}
      showMenuIconButton={false}
    />
  </div>
}

export default Menu