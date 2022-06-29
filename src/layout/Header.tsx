/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";

import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import GroupsIcon from "@mui/icons-material/Groups";

// router
import { NavLink } from "react-router-dom";

// redux toolkit
import { userState } from "../features/authentication/authenticationSlice";

const HeaderContainer = css({
  background: "rgba(255, 0, 0, 0.6)",
  position: "fixed",
});

const ImageStyles = css({
  width: "8rem",
  height: "8rem",
});

const HamburgerMenu = styled.div`
  position: absolute;
  right: 1.5rem;
`;

const DetectHover = styled.div`
  transition-duration: 0.5s;
  :hover {
    color: grey;
    span {
      opacity: 1;
    }
  }
`;

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      user: this.props.user,
      anchorEl: null,
      toggleMenuFlag: false,
      menuBuildItem1Flag: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      menuBuildItem1Flag: true,
    });
  };
  handleListItemClick = () => {
    this.setState({ ...this.state, toggleMenuFlag: false });
  };
  handleMenuClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
      menuBuildItem1Flag: false,
    });
  };
  handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      ...this.state,
      toggleMenuFlag: !this.state.toggleMenuFlag,
    });
  }
  render() {
    return (
      <AppBar css={HeaderContainer}>
        <Toolbar>
          <div>
            <img
              css={ImageStyles}
              id="beerLogo"
              src="yb_brewery_logo.svg"
              alt="Yo Bro Brewery Logo"
            />
          </div>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            style={{ color: "black" }}
          >
            <DetectHover>
              <FacebookIcon fontSize="small" />
            </DetectHover>
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            style={{ color: "black" }}
          >
            <DetectHover>
              <InstagramIcon fontSize="small" />
            </DetectHover>
          </IconButton>
          <IconButton
            href="https://www.twitter.com"
            target="_blank"
            style={{ color: "black" }}
          >
            <DetectHover>
              <TwitterIcon fontSize="small" />
            </DetectHover>
          </IconButton>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            style={{ color: "black" }}
          >
            <DetectHover>
              <YouTubeIcon fontSize="small" />
            </DetectHover>
          </IconButton>
          <IconButton
            href="https://github.com/jtmichelson/yobrobrewery"
            target="_blank"
            style={{ color: "black" }}
          >
            <DetectHover>
              <GitHubIcon fontSize="small" />
            </DetectHover>
          </IconButton>
          <HamburgerMenu>
            <IconButton style={{ color: "black" }} onClick={this.handleToggle}>
              <DetectHover>
                <MenuIcon fontSize="large" />
              </DetectHover>
            </IconButton>

            <Drawer
              anchor={"right"}
              open={this.state.toggleMenuFlag}
              onClose={this.handleToggle}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? "NavLinkItem-selected" : "NavLinkItem";
                }}
                key={"/"}
              >
                <ListItem
                  button
                  key={"Home"}
                  onClick={this.handleListItemClick}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </NavLink>
              <Divider />
              <List>
                {[
                  { name: "Beer", url: "/beer", icon: <SportsBarIcon /> },
                  { name: "About Us", url: "/about-us", icon: <GroupsIcon /> },
                ].map((navLinkItem, index) => (
                  <NavLink
                    to={navLinkItem.url}
                    className={({ isActive }) => {
                      return isActive ? "NavLinkItem-selected" : "NavLinkItem";
                    }}
                    key={navLinkItem.url}
                  >
                    <ListItem
                      button
                      key={navLinkItem.name}
                      onClick={this.handleListItemClick}
                    >
                      <ListItemIcon>{navLinkItem.icon}</ListItemIcon>
                      <ListItemText primary={navLinkItem.name} />
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </Drawer>
          </HamburgerMenu>
        </Toolbar>
      </AppBar>
    );
  }
}

interface IHeaderProps {
  user: userState;
}

interface IHeaderState {
  user: userState;
  anchorEl: any;
  toggleMenuFlag: boolean;
  menuBuildItem1Flag: boolean;
}
