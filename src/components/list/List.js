import React from 'react';
import Card from '../card/Card';
import { Container } from './styles';

const List = ({ users }) => (
    <Container>
        {users.map(user => (
        <Card key={ user.id } user={ user } />
        ))}
    </Container>
  )
export default List;
