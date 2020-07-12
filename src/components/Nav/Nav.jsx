import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav-inner'>
                <div className='nav-menu'>
                    <NavLink to='/profile'>Hot Profile</NavLink>
                    <NavLink to='/dialogs'>Hot Messeges</NavLink>
                    <NavLink to='/news'>Hot News</NavLink>
                    <NavLink to='/music'>Hot Music</NavLink>
                    <NavLink to='/settings'>Hot Settings</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;