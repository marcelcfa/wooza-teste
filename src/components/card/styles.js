import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 30%;
    @media (max-width: 425px) {
      flex: 1;
    }
  margin: 5px;
  height: 150px;
  background: #f2f2f2;
  margin-right: 10px;
    @media (max-width: 425px) {
      margin: 0 0 10px 0;
    }
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 20px;
  border-radius: 5px
`;

export const UserInfo = styled.div`
  height: 100%;
  padding-top: 35px;  
`;

export const Name = styled.div`
  font-weight: bold;  
`;

export const Jobrole = styled.div`
  font-size: 12px;
  color: gray;
  
`;

export const About = styled.div`
  color: gray;
  margin-top: 15px;
  font-size: 12px;  
`;