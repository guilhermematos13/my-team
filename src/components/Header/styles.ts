import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 44px;

  background-color: ${(props) => props.theme['green-500']};

  button {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${(props) => props.theme['gray-100']};
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 24px;
    font-weight: bold;

    :hover {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
    }
  }

  strong {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
  }

  div {
    width: 78px;
  }
`;
