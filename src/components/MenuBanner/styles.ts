import styled from 'styled-components';

export const Container = styled.div`
  width: 35rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 24px 30px;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-800']};

  h2 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 24px;
    font-weight: bold;
  }
`;
