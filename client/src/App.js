import React, { Component } from 'react';
import AppRouter from './router/AppRouter';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      price: "",
      prevPrice: "",
      currency: 'USD',
      bookmarks: [],
      username: "",
      password: "",
      createUsername:"",
      createPassword: "",
      confirmPassword: ""
    };
    this.updateTicker = this.updateTicker.bind(this);
    this.updateNews = this.updateNews.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleCreateUsername = this.handleCreateUsername.bind(this);
    this.handleCreatePassword = this.handleCreatePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this); 
  }
  handleUsername(username) {
      this.setState({
        username
      });
  }
  handlePassword(password) {
    this.setState({
      password
    });
  }
  handleLogin() {
    console.log(this.state.username, this.state.password);
  }
  handleCreateUsername(createUsername) {
    this.setState({
      createUsername
    });
  }
  handleCreatePassword(createPassword) {
    this.setState({
      createPassword
    });
  }
  handleConfirmPassword(confirmPassword) {
    this.setState({
      confirmPassword
    });
  }
  handleRegister() {
    console.log(this.state.createUsername, this.state.createPassword, this.state.confirmPassword);
  }
  updateTicker() {
      setInterval( () => {
        axios.get('/api/getprice')
              .then((res) => {
                this.setState((prevState, props) => {
                  console.log(prevState.price.USD.rate_float, res.data.bpi.USD.rate_float); 
                  return ({
                    price: {
                      USD: res.data.bpi.USD,
                      GBP: res.data.bpi.GBP,
                      EUR: res.data.bpi.EUR
                    },
                    prevPrice: prevState.price
                  })
                 
                });
              })
              .catch((err) => console.log(err));
      }, 10000);
  }
  updateNews() {
    axios.get(('/api/getnews')).then((res) => {
      this.setState({
        news: res.data.articles
      });
    });
  }
  changeCurrency(currency) {
    this.setState({
      currency
    });
  }
  componentDidMount() {
    let news;
    axios.get(('/api/getnews')).then((res) => {
      news = res.data.articles;
      return axios.get(('/api/getprice'));
    })
    .then((res) => {
      this.setState({
        news,
        price: {
          USD: res.data.bpi.USD,
          GBP: res.data.bpi.GBP,
          EUR: res.data.bpi.EUR
        }
      }, this.updateTicker());
    })
    .catch((err) => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <AppRouter 
          news={this.state.news} 
          price={this.state.price} 
          prevPrice={this.state.prevPrice} 
          currency={this.state.currency}
          updateNews={this.updateNews}
          changeCurrency={this.changeCurrency}
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          handleCreateUsername={this.handleCreateUsername}
          handleCreatePassword={this.handleCreatePassword}
          handleConfirmPassword={this.handleConfirmPassword}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
      </div>
    );
  }
}

export default App;
