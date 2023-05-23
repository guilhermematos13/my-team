import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 44px;

    @media screen and (max-width: 425px) {
        padding: 3px 12px;
    }

    background-color: ${props => props.theme['green-500']};

    button {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${props => props.theme['gray-100']};
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1.5rem;
        font-weight: bold;

        :hover {
            border-bottom: 1px solid ${props => props.theme['gray-100']};
        }

        @media screen and (max-width: 425px) {
            font-size: 1rem;
        }
    }

    strong {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme['gray-100']};

        @media screen and (max-width: 425px) {
            font-size: 1rem;
        }
    }

    div {
        width: 78px;
    }

    .withTeam {
        background-color: ${props => props.theme['gray-900']};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 4.5rem;

        img {
            height: 3.5rem;
            width: 3.5rem;
        }
    }

    .withoutTeam {
        width: 80px;

        @media screen and (max-width: 425px) {
            width: 56px;
        }
    }
`;
