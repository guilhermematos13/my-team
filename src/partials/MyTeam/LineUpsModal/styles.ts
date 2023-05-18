import styled from 'styled-components';

export const Header = styled.div`
  width: 576px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;

  background-color: ${(props) => props.theme['gray-900']};

  strong {
    font-size: 20px;
    color: ${(props) => props.theme['gray-100']};
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
    font-size: 20px;
    color: ${(props) => props.theme['gray-100']};
  }
`;
