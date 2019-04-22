import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <img src="./img/CCN-Logo.png" alt="CCN-logo"/>
            <Link onClick={this.props.updateNews} to="/">News</Link>
            <Link  to="/price">Prices</Link>
            {this.props.loggedIn ? <Link to="/bookmarks">Bookmarks</Link> : ''}
            {this.props.loggedIn ? <Link to="/profile">Profile</Link> : ''}
            {this.props.loggedIn ? '' : <Link to="/login">Login</Link>}

        </header>
        );
    }
}

export default Header;