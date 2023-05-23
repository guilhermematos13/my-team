import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'sans-serif';
    
}

body {
    background-color: ${(props) => props.theme['gray-900']};
    min-height: 100vh;
};

::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${(props) => props.theme['gray-100']};
    border-radius: 8px;
    margin-top: 8px;
}

::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['green-700']};
}
`;
