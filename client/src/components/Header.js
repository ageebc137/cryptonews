import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <img src="./img/CCN-Logo.png" alt="CCN-logo"/>
            <Link onClick={this.props.updateNews} to="/">News</Link>
            <Link  to="/price">Prices</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/login">Login</Link>
        </header>
        );
    }
}

export default Header;