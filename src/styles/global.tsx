import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #FFFFFF;
        --orange-900: #F17132;
        --orange-700: #d8652d;
        --yellow-900: #fecf51;
        --yellow-700: #e9be47;
        --purple: #6933FF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font: 400 1rem 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 600px){
        html {
            font-size: 80.5%;
        }
    }

    @media (max-width: 500px){
        html {
            font-size: 70.5%;
        }
    }
`;