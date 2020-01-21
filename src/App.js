import React, {Component} from 'react';
import List from './components/list/List'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    
    let url = "http://localhost:3001/users"
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          users: result
        });
      });
  }

  render() {
    const { users, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <List users = {users} />
      );
    }
  }  
}

export default App;


// Start Server => json-server --watch db.json --port 3001
// Start App => npm start
