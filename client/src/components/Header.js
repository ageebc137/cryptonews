import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Blockchain News</h1>
        <Link to="/">News</Link>
        <Link to="/price">Crypto Prices</Link>
    </header>
);

export default Header;