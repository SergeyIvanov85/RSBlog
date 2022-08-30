import React from 'react';
import { NavLink } from "react-router-dom";
import { useAppSelector} from "../redux/hooks";
import { checkIsAuth } from "../redux/features/auth/authSlice";
import { Menu } from "./Menu";

export const Navbar = () => {

    const isAuth = useAppSelector(checkIsAuth)

    return <header className='header-wrapper'>
            <div className='section-wrapper header'>
                <div className='logo'>        
                    <p>RS BLOG</p>
                </div>
                <nav className='main-nav'>
                    { isAuth && (
                        <ul className='main-nav__list'>
                            <li className='main-nav__link'><NavLink to={'/'}>Главная</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/feed'}>Лента</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/posts'}>Мои статьи</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/about'}>О проекте</NavLink></li>
                        </ul> 
                    )}
                </nav>
                    { isAuth && (
                        <Menu/>
                    )}
            </div>
    </header>
}