/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { jsx, css, keyframes } from '@emotion/react'

const AppStyle = css({
  textAlign: "center"
})

const AppHeader = css({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
})

const FlexRow = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const rotation = keyframes({
  'from': {
    transform: 'rotate(0deg)'
  },
  'to': {
    transform: 'rotate(359deg)'
  }
})

const ImageStyles = css({
  width: "10rem",
  height: "10rem",
  marginLeft: "1rem",
  marginRight: "1rem"
})

const Rotating = css({
  animation: `${rotation} 10s infinite linear`
})

const App: React.FC = () => {
  return (
    <div css={AppStyle}>
      <header css={AppHeader}>
        <div css={FlexRow}>
          <img css={[ImageStyles, Rotating]} id="beerLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg" alt="Yo Bro Brewery Logo" />
        </div>
        <div css={FlexRow}>
          <code>Yo Bro!</code>
        </div>
      </header>
    </div>
  );
}

export default App;
