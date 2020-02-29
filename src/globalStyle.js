import styles from './styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    body,
    html,
    #root {
        width: 100%;
        height: 100%;
        background-color: ${styles.color.white}
    }

    body {
        display: flex;
        flex-direction: column;
        
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
