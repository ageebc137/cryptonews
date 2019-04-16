import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <h1>Blockchain News</h1>
            <Link onClick={this.props.updateNews} to="/">News</Link>
            <Link  to="/price">Crypto Prices</Link>
            <Link to="/settings">Settings</Link>
        </header>
        );
    }
}

export default Header;