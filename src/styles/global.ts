import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    :root {
        --bd-page: #f8f9f6;
        --bg-header: #525353;
        --title-text-color: #0089c7;
    }
    
    // font-size: 16px DESKTOP
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        border: 0;
    }

    body {
        background: var(--bd-page);
        -webkit-font-smoothing: antialiased
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // define fonts in HTML elements
    body, input, textarea, button {
        font-family: "poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    

    .react-modal-overlay {
        position: fixed;
        background: rgb(0, 0, 0, 0.5);
        top: 0;
        bottom: 0%;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 576px;
        background: #f2f2f2;
        padding: 3rem;
        border-radius: 0.25rem;

    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        width: 35px;
        height: 35px;
        & img {
            width: 35px;
            height: 35px;
        }
    }
`;
