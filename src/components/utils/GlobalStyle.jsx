import { createGlobalStyle } from 'styled-components/macro';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  :root {
    --default-bgc: #00ffb2;
  }

  html {
    /*10px default font-size. % is used so the user would be able to zoom-in/out*/
    font-size: 62.5%;
  }

  body {
    font-family:'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

`;
