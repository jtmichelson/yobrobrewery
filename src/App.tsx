/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css, keyframes } from "@emotion/react";
import styled from "styled-components";
import { HeaderWhitespace } from "./styles/sharedStyles";

const AppStyle = styled.div`
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

const App: React.FC = () => {
  return (
    <AppStyle>
      <HeaderWhitespace />
      <AppHeader>
        <FlexRow>
          <h1>Yo Bro Brewery</h1>
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
          <code>Yo Bro!</code>
        </FlexRow>
      </AppHeader>
    </AppStyle>
  );
};

export default App;
