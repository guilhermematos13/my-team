import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 16px 8px;
  width: 348px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0;
  border-radius: 8px;
  outline: none;

  background-color: ${(props) => props.theme['green-500']};

  font-size: 16px;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['green-700']};
    transition-timing-function: ease-out;
    transition-duration: 300ms;
  }

  :focus {
    border: 1px solid ${(props) => props.theme['gray-100']};
  }
`;
