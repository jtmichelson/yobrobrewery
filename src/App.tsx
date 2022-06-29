/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/react";
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageStyles = css({
  width: "20rem",
  height: "25rem",
});

const App: React.FC = () => {
  return (
    <AppStyle>
      <HeaderWhitespace />
      <AppHeader>
        <FlexRow>
          <img
            css={ImageStyles}
            id="beerFirstKegPour"
            src="yb_brewery_text.svg"
            alt="Yo Bro Brewery First Keg Tap Pour"
          />
        </FlexRow>
        <FlexRow>
          <img
            css={ImageStyles}
            id="beerFirstKegPour"
            src="yb_beer_pour.png"
            alt="Yo Bro Brewery First Keg Tap Pour"
          />
          <img
            css={ImageStyles}
            id="beerFirstKegGlass"
            src="yb_beer_glass.png"
            alt="Yo Bro Brewery First Keg Tap Glass"
          />
          <img
            css={ImageStyles}
            id="beerKegs"
            src="yb_kegs.png"
            alt="Yo Bro Brewery First Set of Kegs"
          />
        </FlexRow>
        <FlexRow>
          <img
            css={ImageStyles}
            id="beerFermentor"
            src="yb_fermentor.png"
            alt="Yo Bro Brewery Primary Fermentor"
          />
          <img
            css={ImageStyles}
            id="beerBottles"
            src="yb_brews.png"
            alt="Yo Bro Brewery First Set of Bottles"
          />
          <img
            css={ImageStyles}
            id="beerFirstEverBottle"
            src="yb_first_beer.png"
            alt="Yo Bro Brewery First Ever Beer"
          />
        </FlexRow>
      </AppHeader>
      <HeaderWhitespace />
    </AppStyle>
  );
};

export default App;
