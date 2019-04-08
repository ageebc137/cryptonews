import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log('Component did mount!');
    this.checkAsync()
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  checkAsync = async() => {
    const response = await fetch('/test');


    if (response.status !== 200) throw Error(response);
    return response;
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a href="#"> NEW</a> |
          <a href="#"> BITCOIN</a> |
          <a href="#"> SOMETHING</a>
        </nav>
      </div>
    );
  }
}

export default App;
