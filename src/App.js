import React, { Component } from 'react';

import * as API from  './services/api';
import List from './components/list/List'
class App extends Component {
  state = {
    users: [],
    isLoaded: false,
    error: null
  };
  async getUsers () {
    try {
      this.setState({ isLoaded: true })
      const data  = await API.getUsers()
      this.setState({ loading: false, users: data })
    } catch (error) {
      this.setState({ error, isLoaded: false })
    }
  }
  componentDidMount () {
    this.getUsers()
  }
  render () {
    const { users, isLoaded, error } = this.state;
    if (error) {
      return (<strong>{error.message}</strong>);
    }
    if (!isLoaded) {
      return (<div>Loading ... </div>);
    } 
    return (<List users={users} />);
  }
}
export default App;