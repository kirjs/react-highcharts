import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import { List, ListItem, makeSelectable } from "material-ui/List";
import logo from "../logo.svg";
import history from "../history";
import Routes from "./Routes";
import styled from "styled-components";
import { menuList, baseUrl } from "./constants";
import "prismjs";
import "prismjs/themes/prism.css";

const Content = styled.div`
  margin-left: 256px;
`;

class LeftMenu extends Component {
  navigate = local => history.push(baseUrl + local);

  render() {
    const SelectableList = makeSelectable(List);
    const logoLeft = <img src={logo} className="App-logo" alt="logo" />;

    const listItems = menuList.map((listItem, index) => {
      let nestedItem = !listItem.nestedItems
        ? []
        : listItem.nestedItems.map((item, nestedIndex) => (
            <ListItem
              key={nestedIndex}
              primaryText={item.name}
              onClick={() => this.navigate(item.url)}
              value={baseUrl + item.url}
            />
          ));

      return (
        <ListItem
          key={index}
          primaryText={listItem.name}
          onClick={() => this.navigate(listItem.url)}
          value={baseUrl + listItem.url}
          nestedItems={nestedItem}
        />
      );
    });
    return (
      <div>
        <Drawer containerStyle={{ background: "#efefef" }} open={true}>
          <AppBar
            titleStyle={{ color: "#72D9FA", fontSize: 20 }}
            showMenuIconButton={true}
            iconStyleLeft={{ margin: "15px -3px 0px -5px" }}
            iconElementLeft={logoLeft}
            title="React-Highcharts"
          />
          <SelectableList value={history.location.pathname}>
            {listItems}
          </SelectableList>
        </Drawer>
        <Content>
          <Routes />
        </Content>
      </div>
    );
  }
}

export default LeftMenu;
