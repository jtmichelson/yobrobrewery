/** @jsx jsx */

import React from 'react';
import { jsx, css, keyframes } from '@emotion/core'

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

const AppLink = css({
  color: "#09d3ac"
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
          <img css={[ImageStyles, Rotating]} id="reactLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg" alt="Yo Bro Brewery Logo" />
        </div>
        <p>
          <code>Yo Bro!</code>
        </p>
        <a
          css={AppLink}
          href="https://www.linkedin.com/in/jasonmichelson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
