import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;

  background-color: ${(props) => props.theme['gray-900']};

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media screen and (max-width: 425px) {
    padding: 8px 12px;

    strong {
      font-size: 1rem;
    }
  }
`;

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
  }

  @media screen and (max-width: 425px) {
    padding: 8px 12px;

    p {
      font-size: 1rem;
    }
  }
`;
