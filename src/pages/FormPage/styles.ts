import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 100px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: ${props => props.theme['gray-800']};
    width: 40%;
    padding: 30px 64px;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 15px 20px;
    }
`;

export const Title = styled.p`
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
    margin-bottom: 52px;

    @media screen and (max-width: 425px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 52px;
`;
