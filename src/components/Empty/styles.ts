import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 8px;

    p {
        color: ${props => props.theme['gray-100']};
        font-size: 1.25rem;

        @media screen and (max-width: 425px) {
            font-size: 1rem;
        }
    }
`;
