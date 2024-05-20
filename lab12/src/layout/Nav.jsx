import React from 'react';
import cls from './Nav.module.css';
import logo from '../images/logo.svg';
import measering from '../images/measering.svg';
import calculation from '../images/calculation.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className={cls.navbar}>
            <img src={logo} alt='logo' className={cls.logoImg}/>
            <Link className={cls.navbarText} to='/services'>Services</Link>
            <Link className={cls.navbarText} to='/products'>Products</Link>
            <Link className={cls.navbarText} to='/about'>About us</Link>
            <Link className={cls.navbarText} to='/portfolio'>Portfolio</Link>
            <Link className={cls.navbarText}  to='/FAQ'>FAQ</Link>
            <Link className={cls.navbarText} to='/contacts'>Contacts</Link>
            <button className={cls.navbarBtnOrange}>
                <img className= {cls.btnImage} src={measering} alt='measering'/>
                <Link className={cls.NavbarBtnText} to='/request'>Make request</Link>
            </button>
            <button className={cls.navbarBtnBlue}>
                <img className= {cls.btnImage} src={calculation} alt='calculation'/>
                <Link className={cls.NavbarBtnText} to='/calculation'>Calculation</Link>
            </button>
        </div>
    );
};

export default Nav;
