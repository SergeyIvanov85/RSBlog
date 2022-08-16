import React from "react";
import { Link, NavLink} from "react-router-dom";

export  const Navbar = () => {
    return <nav className='main-nav'>
        <ul className='main-nav__list'>
            <li className='main-nav__link active'><NavLink to={'/'} href='/'>Главная</NavLink></li>
            <li className='main-nav__link'><NavLink to={'/posts'} href='/'>Лента</NavLink></li>
            <li className='main-nav__link'><NavLink to={'/new'} href='/'>Мои статьи</NavLink></li>
            <li className='main-nav__link'><a href='/'>О проекте</a></li>
        </ul>
    </nav>
}