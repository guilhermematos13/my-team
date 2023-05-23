import styled from 'styled-components';

export const ButtonStyled = styled.button`
    padding: 16px 8px;
    width: 277px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 0;
    border-radius: 8px;

    background-color: ${props => props.theme['gray-900']};

    font-size: 1rem;
    color: ${props => props.theme['gray-100']};
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme['green-500']};
        transition-timing-function: ease-out;
        transition-duration: 300ms;
    }

    :disabled {
        background-color: ${props => props.theme['gray-400']};
        cursor: not-allowed;
    }
`;
