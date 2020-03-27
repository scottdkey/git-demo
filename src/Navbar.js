import React from "react";
import { Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu color="green inverted">
    <Menu.Item>Primary Portfolio Project</Menu.Item>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
    <Menu.Item>Item 3</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>Login</Menu.Item>
      <Menu.Item>Register</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
