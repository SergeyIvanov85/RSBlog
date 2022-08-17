import React from "react";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return <form onSubmit={e => e.preventDefault()}
    className=''
    >
        <h1 className=''>Авторизация</h1>
        <label className=''>
            Логин
            <input type='text'
            placeholder='Username'
                   className=''
            />
        </label>

        <label className=''>
            Пароль
            <input type='password'
                   placeholder='Password'
                   className=''
            />
        </label>
        <div className=''>
            <button type='submit' className=''>Подтвердить</button>
            <Link to={'/register'} className=''>Еще не зарегистрированы?</Link>
        </div>
    </form>
}