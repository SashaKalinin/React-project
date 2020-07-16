import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navInner}>
                <div className={s.navMenu}>
                    <NavLink to='/profile' activeClassName = {s.activeLink}>Hot Profile</NavLink>
                    <NavLink to='/dialogs' activeClassName = {s.activeLink}>Hot Messeges</NavLink>
                    <NavLink to='/news' activeClassName = {s.activeLink}>Hot News</NavLink>
                    <NavLink to='/music' activeClassName = {s.activeLink}>Hot Music</NavLink>
                    <NavLink to='/settings' activeClassName = {s.activeLink}>Hot Settings</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;