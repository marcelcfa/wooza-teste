import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 30%;
  margin: 5px;
  height: 150px;
  background: white;
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 20px;


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