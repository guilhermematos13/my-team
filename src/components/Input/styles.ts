import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;

  background-color: ${(props) => props.theme['gray-900']};

  input {
    width: 100%;
    padding: 6px;
    outline: none;
    color: ${(props) => props.theme['gray-100']};
    background-color: transparent;
    box-shadow: none;
    border: 0;
    font-size: 16px;
    border-radius: 8px;

    ::placeholder {
      ${(props) => props.theme['gray-400']}
    }
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`;
