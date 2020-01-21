import React from 'react';
import Card from '../card/Card';
import { Container } from './styles';

const List = ({users}) => (
    <Container>
        {users.map(user => (
        <Card user={user} />
        ))}
    </Container>
  )
export default List;


// json-server --watch db.json --port 3001
// npm start