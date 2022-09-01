import React, { useState } from 'react';
import { logout } from '../redux/features/auth/authSlice'
import { useAppDispatch } from '../redux/hooks'
import {toast} from 'react-toastify';
import { Link, NavLink } from 'react-router-dom';

const iconImg = require('../assets/images/profile-menu.png');

export const Menu = () => {

    const dispatch = useAppDispatch();
    const [active, setActive] = useState(false);

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из аккаунта')
    } 

    const toggleMenu = () => {
        setActive(!active);
    }

    const toggleTheme = () => {
        document.body.classList.toggle('dark');
    }

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
                        <input type='button' id='theme-toggle' className='btn-toggle theme-toggle' onClick={() => toggleTheme()}/>
                        <label htmlFor='theme-toggle'>Изменить тему</label>
                    </li>
                    <li className='menu-content__item'>
                        <input type='button' className='btn-toggle lang-toggle' id='lang-toggle'/>
                        <label htmlFor='lang-toggle'>Изменить язык</label>
                    </li>
                    <li className='menu-content__item'>
                        <span className='statistics-icon'></span>
                        <NavLink to={'/statistics'}>
                            <p>Статистика</p>
                        </NavLink>
                    </li>
                    <li className='menu-content__item'>
                        <button onClick={logoutHandler} className='btn login-btn'><Link to={'/'}>Выйти</Link></button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

