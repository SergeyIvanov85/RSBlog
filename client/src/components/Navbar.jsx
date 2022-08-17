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
                            <li className='main-nav__link'><NavLink to={'/'} href='/'>Главная</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/posts'} href='/'>Лента</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/new'} href='/'>Мои статьи</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/about'} href='/'>О проекте</NavLink></li>
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