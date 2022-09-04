import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useAppSelector} from "../redux/hooks";
import { checkIsAuth } from "../redux/features/auth/authSlice";
import { Menu } from "./Menu";
import { useTranslation } from 'react-i18next';


export const Navbar = () => {
    const { t } = useTranslation();
    const isAuth = useAppSelector(checkIsAuth);

    return <header className='header-wrapper'>
            <div className='section-wrapper header'>
                <div className='logo'>        
                    <Link to={'/'}><p>R&nbsp; &nbsp;S<br/>BLOG</p></Link>
                </div>
                <nav className='main-nav'>
                    { isAuth && (
                        <ul className='main-nav__list'>
                            <li className='main-nav__link'><NavLink to={'/'}>{t('navbar.main')}</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/feed'}>{t('navbar.feed')}</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/posts'}>{t('navbar.users-posts')}</NavLink></li>
                            <li className='main-nav__link'><NavLink to={'/about'}>{t('navbar.about')}</NavLink></li>
                        </ul> 
                    )}
                </nav>
                    {isAuth ? ('') : (
                        <div className='auth-btns'>
                            <Link to={'/login'}><button className='btn login-btn'>{t('main.login')}</button></Link>
                            <Link to={'/register'}><button className='btn registration-btn'>{t('main.register')}</button></Link> 
                        </div>
                        )}               
                
                    { isAuth && (
                        <Menu/>
                    )}
            </div>
    </header>
}