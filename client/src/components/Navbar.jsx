import React from 'react';
import menu from '../assets/images/menu-icon.png'

export  const Navbar = () => {
    return <header className='header-wrapper'>
            <div className='section-wrapper header'>
                <div className='logo'>RS BLOG</div>
                <nav className='main-nav'>
                    <ul className='main-nav__list'>
                        <li className='main-nav__link active'><a href='/'>Главная</a></li>
                        <li className='main-nav__link'><a href='/'>Лента</a></li>
                        <li className='main-nav__link'><a href='/'>Мои статьи</a></li>
                        <li className='main-nav__link'><a href='/'>О проекте</a></li>
                    </ul> 
                </nav>
                <div className='menu'>
                    <img src={menu} alt='Menu'></img>
                </div>
            </div>
    </header>
}