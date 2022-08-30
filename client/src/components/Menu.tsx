import React from "react";
import { logout } from "../redux/features/auth/authSlice"
import { useAppDispatch } from "../redux/hooks"
import {toast} from "react-toastify";


export const Menu = ({active, setActive}) => {

    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из аккаунта')
    } 

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={ () => setActive(false)}> 
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
    )
}