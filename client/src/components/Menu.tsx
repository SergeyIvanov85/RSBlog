import React, { useState } from "react";
import { logout } from "../redux/features/auth/authSlice"
import { useAppDispatch } from "../redux/hooks"
import {toast} from "react-toastify";

const iconImg = require('../assets/images/menu-icon.png');

export const Menu = () => {

    const dispatch = useAppDispatch();
    const [active, setActive] = useState(false);

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из аккаунта')
    } 

    return ( 
        <>
        <div className={active ? 'menu-icon menu-icon_active' : 'menu-icon'} onClick={() => setActive(!active)}>
            <img src={iconImg} alt='Menu'></img>
        </div>
                
        <div className={active ? 'menu menu_active' : 'menu'} onClick={() => setActive(false)}>
                <div className="menu-content">
                    <ul className="menu-content__list">
                        <li className="menu-content__item">
                            <p>Сменить тему</p>
                        </li>
                        <li className="menu-content__item">
                            <p>Switch to English</p>
                        </li>
                        <li className="menu-content__item">
                            <p>Статистика</p>
                        </li>
                        <li className="menu-content__item">
                            <button onClick={logoutHandler} className='btn login-btn'>Выйти</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

