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
    font-size: 1rem;
    border-radius: 8px;

    ::placeholder {
      ${(props) => props.theme['gray-400']}
    }

    @media screen and (max-width: 425px) {
      font-size: 0.75rem;
    }
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
    width: 2rem;
    height: 2rem;

    @media screen and (max-width: 425px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
