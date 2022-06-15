import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export class UserListButton extends React.Component<IUserListButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props;
    const selectedPanel = isLoggedIn ? (
      <ListItem button key={"Home"}>
        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
    ) : (
      <ListItem button key={"Login"}>
        <ListItemIcon>{<VpnKeyIcon />}</ListItemIcon>
        <ListItemText primary={"Login"} />
      </ListItem>
    );
    return selectedPanel;
  }
}

export interface IUserListButtonProps {
  isLoggedIn: boolean;
}
