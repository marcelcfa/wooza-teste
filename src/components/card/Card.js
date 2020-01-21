import React from 'react';
import { Container, Image, Name, Jobrole, UserInfo, About } from './styles';

const Card = ({user}) => ( 
        <Container key={user.id}>
            <Image src={user.img} alt={user.name}/>
            <UserInfo>
                <Name>{user.name}</Name>
                <Jobrole>{user.jobrole}</Jobrole>
                <About>{user.about}</About>
            </UserInfo>            
        </Container>
)
export default Card;