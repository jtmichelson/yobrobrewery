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
import WebIcon from "@mui/icons-material/Web";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { UserListButton } from "../components/UserButtonList";

// router
import { NavLink } from "react-router-dom";

// redux toolkit
import { userState } from "../features/authentication/authenticationSlice";

const HeaderContainer = css({
  background: "rgba(148, 148, 148,0.8)",
  position: "fixed",
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
  componentWillMount() {
    // TODO
  }
  componentDidUpdate() {
    // TODO
  }
  componentWillUpdate() {
    // TODO
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
              id="beerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg"
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
              <a href="https://www.yobrobrewery.com">
                <UserListButton
                  isLoggedIn={this.state.user.id === -1 ? false : true}
                />
              </a>
              <Divider />
              <List>
                {[
                  { name: "SubMenu1", url: "/Articles" },
                  { name: "SubMenu2", url: "/SubMenu2" },
                ].map((itemObject, index) => (
                  <NavLink
                    to={itemObject.url}
                    className={({ isActive }) => {
                      return isActive ? "NavLinkItem-selected" : "NavLinkItem";
                    }}
                    key={itemObject.url}
                  >
                    <ListItem
                      button
                      key={itemObject.name}
                      onClick={this.handleListItemClick}
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? <WebIcon /> : <WebAssetIcon />}
                      </ListItemIcon>
                      <ListItemText primary={itemObject.name} />
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
