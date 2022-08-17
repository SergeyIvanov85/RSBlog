import React from 'react';
import menu from '../assets/images/menu-icon.png';
import { NavLink } from "react-router-dom";

export  const Navbar = () => {

    const isAuth = true;

    return <header className='header-wrapper'>
            <div className='section-wrapper header'>
                <div className='logo'>RS BLOG</div>
                <nav className='main-nav'>
                    { isAuth && (
                        <ul className='main-nav__list'>
                            <li className='main-nav__link'><NavLink to={'/'}><a href='/'>Главная</a></NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/posts'}><a href='/'>Лента</a></NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/new'}><a href='/'>Мои статьи</a></NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/about'}><a href='/'>О проекте</a></NavLink></li>
                        </ul> 
                    )}
                </nav>
                <div className='menu'>
                    { isAuth && (
                        <img src={menu} alt='Menu'></img>
                    )}
                </div>
            </div>
    </header>
}