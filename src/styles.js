import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Architects Daughter', cursive;
  padding: 20px 40px;
  @media screen and (max-width: 800px){
    padding: 10px
  }
}


a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}`;

export default GlobalStyle;
