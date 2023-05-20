import styled from 'styled-components';

export const Container = styled.div`
  width: 590px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SelectTitle = styled.label`
  font-size: 20px;
  color: ${(props) => props.theme['gray-100']};
`;
