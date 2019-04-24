import React, { Component } from 'react';
import AppRouter from './router/AppRouter';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      price: "",
      currency: 'USD',
      loggedIn: false,
      bookmarks: [],
      name:'',
      message: "",
      err: false,
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
    this.redirect = this.redirect.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
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
  redirect() {
    return  <Redirect to="/bookmarks" />
  }
  handleLogin = (callback) => {
    const username = this.state.username;
    const password = this.state.password;
    axios.post(('/db/login'), {username, password}).then((res) => {
       this.setState({
        name: res.data.username,
        bookmarks: res.data.bookmarks,
        loggedIn: true
      });
      callback();
    })
    .catch((error) => {
          this.setState({
            err: true
          });
    });
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
  handleRegister(callback) {
    console.log(this.state.createPassword, this.state.confirmPassword);
    if (this.state.createPassword.length < 6 || this.state.confirmPassword.length < 6) {
          console.log('hello');
          this.setState({
            message: 'The password is fewer than 6 characters'
          });
          return;
    }else if (this.state.createPassword !== this.state.confirmPassword) {
          this.setState({
            message: 'The passwords do not match'
          });
          return;
    }
    
    axios.post(('/db/register'), {username: this.state.createUsername, password: this.state.createPassword}).then((res) => {
      this.setState({
        name: res.data.username,
        bookmarks: res.data.bookmarks,
        loggedIn: true
      });
      callback();
    })
    .catch((err) => {
        this.setState({
          message: 'This username is already taken'
        })
    });

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

  addBookmark = (title, url) => {
    if (this.state.bookmarks.map((bookmark, i) => bookmark.title).indexOf(title) >= 0) return console.log('Article already bookmarked')
    this.setState((prevState) => ({
      bookmarks: prevState.bookmarks.concat({title, url})
    }));
    axios.post('/db/addbookmark', {username: this.state.username, bookmark: {title, url}})
          .then(res => {
            console.log(res);
          })
  }
  
  removeBookmark = (bookmark, i) => {
    const bookmarks = this.state.bookmarks.slice();
    bookmarks.splice(i,1);
    this.setState({
      bookmarks
    });
    axios.post('/db/removeBookmark', {bookmark, username: this.state.name})
        .then((response) => {
          console.log('Bookmark was removed');
        })
        .catch((err) => console.error(err));

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
          message={this.state.message}
          loggedIn={this.state.loggedIn}
          name={this.state.name}
          err={this.state.err}
          addBookmark={this.addBookmark}
          bookmarks={this.state.bookmarks}
          removeBookmark={this.removeBookmark}
        />
      </div>
    );
  }
}

export default App;
