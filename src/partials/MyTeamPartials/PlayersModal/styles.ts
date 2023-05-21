import styled from 'styled-components';

export const Header = styled.div`
  width: 57rem;
  padding: 16px 24px;
  display: grid;
  grid-template-columns: 50% 30% 20%;

  background-color: ${(props) => props.theme['gray-900']};

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`;

export const PlayerInfo = styled.div`
  width: 57rem;
  padding: 16px 24px;
  display: grid;
  align-items: center;
  grid-template-columns: 50% 30% 20%;
  margin-top: 8px;

  background-color: ${(props) => props.theme['gray-900']};

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
  }
`;
