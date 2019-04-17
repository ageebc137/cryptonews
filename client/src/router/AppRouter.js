import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import NewsPage from '../components/NewsPage';
import PricePage from '../components/PricePage';
import SettingsPage from '../components/SettingsPage';
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
                                        />
                                    )}/>
                    <Route path="/settings" render={() => (<SettingsPage currency={this.props.currency} 
                                                                    changeCurrency={this.props.changeCurrency}/>)} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/bookmarks" component={BookmarksPage} />
                    <Route path="/signup" component={SignupPage} />
                </Switch>
            </BrowserRouter>
        );
    } 
}

export default AppRouter;