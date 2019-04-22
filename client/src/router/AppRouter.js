import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import NewsPage from '../components/NewsPage';
import PricePage from '../components/PricePage';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import BookmarksPage from '../components/BookmarksPage';
import ProfilePage from '../components/ProfilePage';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <BrowserRouter>
                <Header updateNews={this.props.updateNews} loggedIn={this.props.loggedIn}/>
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
                    <Route path="/login" render={(props) => (<LoginPage 
                                                            handleUsername={this.props.handleUsername}
                                                            handlePassword={this.props.handlePassword}
                                                            handleLogin={this.props.handleLogin}
                                                            loggedIn={this.props.loggedIn}
                                                            name={this.props.name}
                                                            err={this.props.err}
                                                            {...props}
                                                        />)
                                                        }/>
                    <Route path="/bookmarks" component={BookmarksPage} />
                    <Route path="/profile" render={() => (<ProfilePage
                                                            loggedIn={this.props.loggedIn}
                                                            name={this.props.name}
                                                            />
                                                            )} />
                    <Route path="/signup" render={() => (<SignupPage 
                                                            handleCreateUsername={this.props.handleCreateUsername}
                                                            handleCreatePassword={this.props.handleCreatePassword}
                                                            handleConfirmPassword={this.props.handleConfirmPassword}
                                                            handleRegister={this.props.handleRegister}
                                                            message={this.props.message}
                                                            />)
                                                            } />
                </Switch>
            </BrowserRouter>
        );
    } 
}

export default AppRouter;