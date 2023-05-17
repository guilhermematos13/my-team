import styled from 'styled-components';

export const Container = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme['gray-100']};
`;

export const LoginStyled = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  padding: 36px 52px;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-800']};

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
