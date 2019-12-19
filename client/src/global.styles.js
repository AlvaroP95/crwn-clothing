import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    padding: 10px ;


    @media screen and (max-width: 800px){
        padding: 10px;
    }
    
    @media screen and (max-width: 375px){
        padding: 10px 0px;
    }

    @media screen and (min-width: 1200px){
        padding: 10px 20px
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }  
`;
