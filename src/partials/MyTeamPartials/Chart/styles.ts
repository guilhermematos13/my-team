import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 30px;
  border-radius: 8px;

  h2 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
  }
`;
