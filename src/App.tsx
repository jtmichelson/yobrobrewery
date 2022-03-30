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
          <img css={ImageStyles} src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript Logo" />
          <img css={[ImageStyles, Rotating]} id="reactLogo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
          <img css={ImageStyles} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS Logo"/>
          <img css={ImageStyles} src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="Cpp Logo"/>

        </div>
        <p>
          <code>Welcome to my portfolio</code>
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
