import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding: 0px 32px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 90px;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 32px;
    gap: 16px;
  }
`;
