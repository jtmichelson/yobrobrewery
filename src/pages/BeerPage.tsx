/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css, keyframes } from "@emotion/react";
import styled from "styled-components";

const BeerPageStyle = styled.div`
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

export default class BeerPage extends React.Component<
  IBeerPageProps,
  IBeerPageState
> {
  constructor(props: IBeerPageProps) {
    super(props);
    this.state = {
      name: "beerPage",
    };
  }
  render() {
    return (
      <BeerPageStyle>
        <AppHeader>
          <FlexRow>
            <h1>Our beer selection</h1>
          </FlexRow>
          <FlexRow>
            <img
              css={[ImageStyles, Rotating]}
              id="beerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg"
              alt="Yo Bro Brewery Logo"
            />
          </FlexRow>
          <FlexRow>
            <img
              css={[ImageStyles, Rotating]}
              id="beerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg"
              alt="Yo Bro Brewery Logo"
            />
          </FlexRow>
          <FlexRow>
            <img
              css={[ImageStyles, Rotating]}
              id="beerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg"
              alt="Yo Bro Brewery Logo"
            />
          </FlexRow>
        </AppHeader>
      </BeerPageStyle>
    );
  }
}

interface IBeerPageProps {}

interface IBeerPageState {
  name: string;
}
