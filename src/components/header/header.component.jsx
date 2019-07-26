import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className='container'>
        <div className="header">
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
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link className="option" to='/sign-in'>Sign In</Link>
                }
            </div>
        </div>
    </div>
)

export default Header;