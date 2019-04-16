import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import NewsPage from '../components/NewsPage';
import PricePage from '../components/PricePage';
import SettingsPage from '../components/SettingsPage';

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
                    <Route path="/settings" component={SettingsPage} />
                    {/* <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} /> */}
                </Switch>
            </BrowserRouter>
        );
    } 
}

export default AppRouter;