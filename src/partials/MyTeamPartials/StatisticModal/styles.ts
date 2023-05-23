import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  padding: 16px 40px;
  background-color: ${(props) => props.theme['gray-900']};
  align-items: center;

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;
