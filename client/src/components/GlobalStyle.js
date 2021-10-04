import { createGlobalStyle } from "styled-components";
import background from "../img/background.jpg"; 

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }

    body{
        box-sizing: border-box;
        margin: 0;
        background-image: url(${background});
        background-color: black;
        background-size: cover;
        height: 100vh;
        background-attachment: fixed;
    }
`;

export default GlobalStyle;