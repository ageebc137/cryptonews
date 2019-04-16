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
      currency: 'USD'
    };
    this.updateTicker = this.updateTicker.bind(this);
    this.updateNews = this.updateNews.bind(this);
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
        />
      </div>
    );
  }
}

export default App;
