import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import NewsPage from '../components/NewsPage';
import PricePage from '../components/PricePage';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={NewsPage} exact={true}/>
            <Route path="/price" component={PricePage}/>
            <Route path="/settings" component={SettingsPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;