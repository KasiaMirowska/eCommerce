import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px;

        @media screen and (max-width: 800px) {
            padding: 2%;
        }
    }
    
    a{
        text-decoration: none;
        color: black;
    }
`