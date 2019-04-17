import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <h1>CCN</h1>
            <Link onClick={this.props.updateNews} to="/">News</Link>
            <Link  to="/price">Prices</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/login">Login</Link>
        </header>
        );
    }
}

export default Header;