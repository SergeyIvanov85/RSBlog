import React from "react";

export  const Navbar = () => {
    return <nav className='main-nav'>
        <ul className='main-nav__list'>
            <li className='main-nav__link active'>Главная</li>
            <li className='main-nav__link'>Лента</li>
            <li className='main-nav__link'>Мои статьи</li>
            <li className='main-nav__link'>О проекте</li>
        </ul>
    </nav>
}