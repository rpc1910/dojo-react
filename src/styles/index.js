import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap'); 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5;
  }
`;

export default GlobalStyle;
