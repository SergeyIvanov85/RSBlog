import React, { useState } from 'react';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {toast} from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const iconImg = require('../assets/images/profile-menu.png');

export const Menu = () => {
    const isAuth = useAppSelector(checkIsAuth);
    const [auth, checkAuth] = useState(isAuth);
    const dispatch = useAppDispatch();
    
    // для выхода из учетки: 
    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из аккаунта')
        checkAuth(auth);
    } 

    //=== для открытия/закрытия меню
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        setActive(!active);
    }

    //=== для смены темы
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === 'dark') {
        document.body.className='dark';
    };
    const setThemeLight = () => {
        localStorage.setItem("theme", 'light');
        document.body.className='light';
    }
    const setThemeDark = () => {
        localStorage.setItem("theme", 'dark');
        document.body.className='dark';
    }

    //=== для смены языка
    const { t, i18n } = useTranslation();
    const lngs:any = {
        en: { nativeName: 'En' },
        ru: { nativeName: 'Ru' }
    };

    return (
        <> 
        <div className={active ? 'menu-btn menu-btn_active' : 'menu-btn'} onClick={() => toggleMenu()}>
            <img src={iconImg} alt=''/>
        </div>            
        <div className={active ? 'disabled disabled_active' : 'disabled'} onClick={() => toggleMenu()}></div>
        <div className={active ? 'menu menu_active' : 'menu'} onClick={() => toggleMenu()}>    
            <div className='menu-content' onClick={(e) => e.stopPropagation()}>
                <ul className='menu-content__list'>
                    <li className='menu-content__item'>
                        <p>{t('menu.change-theme')}:</p>
                        <div>
                            <button className='menu-icon btn-theme-light' onClick={() => setThemeLight()}></button>
                            <button className='menu-icon btn-theme-dark' onClick={() => setThemeDark()}></button>
                        </div>
                    </li>
                    <li className='menu-content__item'>
                        <p>{t('menu.change-lang')}:</p>
                        <div>
                            {Object.keys(lngs).map((lng) => (
                            <button key={lng} className={i18n.resolvedLanguage === lng ? 'lang-btn lang-btn_active' : 'lang-btn'} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                            </button>
                            ))}
                        </div>
                    </li>
                    <li className='menu-content__item'>
                        <NavLink to={'/statistics'}>
                            <p className='statistics-link'>{t('menu.statistics')}</p>
                        </NavLink>
                    </li>
                    <li>
                        <a className='qr' href="https://sergeyivanov85.github.io/RSBlog/">
                            <p>Поделиться приложением:</p>
                            <img src="http://qrcoder.ru/code/?https%3A%2F%2Fsergeyivanov85.github.io%2FRSBlog%2F&6&0" alt="QR код" />
                        </a>
                    </li>
                    <li className='menu-content__item'>
                        <button onClick={logoutHandler} className='logout-btn'><Link to={'/'}>{t('menu.logout-btn')}</Link></button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

