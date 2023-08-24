import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing: border-box;
        max-width: 100vw;
        font-family: 'Rajdhani', sans-serif;
    }

    html{
        scroll-behavior: smooth;
    }
`;


export default GlobalStyle;
