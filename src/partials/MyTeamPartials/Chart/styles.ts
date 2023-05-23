import styled from 'styled-components';

export const TitleStyled = styled.h2`
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.25rem;

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;
