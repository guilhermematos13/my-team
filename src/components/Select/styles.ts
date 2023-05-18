import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SelectTitle = styled.label`
  font-size: 20px;
  color: ${(props) => props.theme['gray-100']};
`;

export const SelectStyled = styled(Select.Trigger)`
  width: 590px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-400']};

  :focus {
    border: 1px solid ${(props) => props.theme['green-500']};
  }
`;
