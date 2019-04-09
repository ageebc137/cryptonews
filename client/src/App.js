import React, { Component } from 'react';
import AppRouter from './router/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      price: []
    };
  }
  componentDidMount() {
    console.log('Component did mount!');
  }

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
