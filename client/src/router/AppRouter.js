import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import NewsPage from '../components/NewsPage';
import PricePage from '../components/PricePage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import BookmarksPage from '../components/BookmarksPage';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <BrowserRouter>
                <Header updateNews={this.props.updateNews}/>
                <Switch>
                    <Route path="/" render={() => <NewsPage news={this.props.news}/>} exact={true}/>
                    <Route 
                        path="/price" 
                        render={() => (<PricePage 
                                            price={this.props.price} 
                                            prevPrice={this.props.prevPrice}
                                            currency={this.props.currency}
                                            changeCurrency={this.props.changeCurrency}
                                        />
                                    )}/>
                    <Route path="/login" render={() => (<LoginPage 
                                                            handleUsername={this.props.handleUsername}
                                                            handlePassword={this.props.handlePassword}
                                                            handleLogin={this.props.handleLogin}
                                                        />)} />
                    <Route path="/bookmarks" component={BookmarksPage} />
                    <Route path="/signup" render={() => (<SignupPage 
                                                            handleCreateUsername={this.props.handleCreateUsername}
                                                            handleCreatePassword={this.props.handleCreatePassword}
                                                            handleConfirmPassword={this.props.handleConfirmPassword}
                                                            handleRegister={this.props.handleRegister}
                                                            />)} />
                </Switch>
            </BrowserRouter>
        );
    } 
}

export default AppRouter;