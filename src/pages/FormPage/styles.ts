import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${(props) => props.theme['gray-800']};
  max-width: 45rem;
  padding: 30px 64px;
  border-radius: 8px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
  margin-bottom: 52px;
`;

export const ButtonContainer = styled.div`
  margin-top: 52px;
`;
