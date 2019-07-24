import React from 'react';

import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <h1>LOGO</h1>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
        </Link>
            <Link className="option" to="/about">
                ABOUT
        </Link>
        </div>
    </div>
)

export default Header;