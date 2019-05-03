import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <a href="/"><img id="ccn-logo" src="./img/CCN-Logo.png" alt="CCN-logo"/></a>
            {this.props.loggedIn ? '' : <Link className="navlink" to="/login">LOGIN</Link>}
            {this.props.loggedIn ? <Link className="navlink" to="/profile">PROFILE</Link> : ''}
            {this.props.loggedIn ? <Link className="navlink" to="/bookmarks">BOOKMARKS</Link> : ''}
            <Link className="navlink" to="/price">PRICE</Link>
            <Link className="navlink" onClick={this.props.updateNews} to="/">NEWS</Link>
        </header>
        );
    }
}

export default Header;