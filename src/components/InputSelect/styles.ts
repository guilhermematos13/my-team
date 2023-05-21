import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  box-sizing: border-box;
`;

export const SelectTitle = styled.label`
  font-size: 1.25rem;
  color: ${(props) => props.theme['gray-100']};
`;

export const Select = styled.select`
  text-decoration: none;
  border: none;
  background-color: ${(props) => props.theme['gray-900']};
  border-radius: 8px;
  padding: 1rem;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  :focus {
    border: 1px solid ${(props) => props.theme['green-500']};
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }

  :disabled {
    background-color: ${(props) => props.theme['gray-disabled']};
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 55px;
  pointer-events: none;
  color: ${(props) => props.theme['gray-100']};
`;
