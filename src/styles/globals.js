import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background3};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  main {
    height: 100vh;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #1d1d1d;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(#515152, #515152);
    opacity: 0.05;
    border-radius: 10px;
    border: 2px;
    width: 10px;
  }
`;

export default GlobalStyles;