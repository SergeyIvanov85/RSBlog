import React from 'react';
import menu from '../assets/images/menu-icon.png';
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";
import { checkIsAuth } from "../redux/features/auth/authSlice";


export const Navbar = () => {

    const isAuth = useSelector(checkIsAuth)


    return <header className='header-wrapper'>
            <div className='section-wrapper header'>
                <div className='logo'>RS BLOG</div>
                <nav className='main-nav'>
                    { isAuth && (
                        <ul className='main-nav__list'>
                            <li className='main-nav__link'><NavLink to={'/'} href='/'>Главная</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/feed'} href='/'>Лента</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/new'} href='/'>Добавить статью</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/posts'} href='/'>Мои статьи</NavLink></li>
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