import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    height: 100%;
    padding: 10px;
    }  
`;