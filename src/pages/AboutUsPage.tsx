/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css, keyframes } from "@emotion/react";

import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { HeaderWhitespace } from "../styles/sharedStyles";

const AboutUsPageStyle = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(359deg)",
  },
});

const ImageStyles = css({
  width: "10rem",
  height: "10rem",
  marginLeft: "1rem",
  marginRight: "1rem",
});

const Rotating = css({
  animation: `${rotation} 10s infinite linear`,
});

export default class AboutUsPage extends React.Component<
  IAboutUsPageProps,
  IAboutUsPageState
> {
  constructor(props: IAboutUsPageProps) {
    super(props);
    this.state = {
      name: "aboutUsPage",
    };
  }
  render() {
    return (
      <AboutUsPageStyle>
        <HeaderWhitespace />
        <AppHeader>
          <FlexRow>
            <h1>About Us</h1>
          </FlexRow>
          <FlexRow>
            <PersonIcon css={[ImageStyles, Rotating]} />
          </FlexRow>
          <FlexRow>
            <PersonIcon css={[ImageStyles, Rotating]} />
          </FlexRow>
          <FlexRow>
            <PersonIcon css={[ImageStyles, Rotating]} />
          </FlexRow>
        </AppHeader>
      </AboutUsPageStyle>
    );
  }
}

interface IAboutUsPageProps {}

interface IAboutUsPageState {
  name: string;
}
