import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 425px) {
    height: 100%;
    padding: 10px;
    }
  justify-content: center;
  flex-wrap: wrap;
  background: #f2f2f2;
`;