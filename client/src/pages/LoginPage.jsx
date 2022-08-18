import React from "react";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return <form onSubmit={e => e.preventDefault()}className='section-wrapper form-container'>
        <div className='form-inner'>
            <h1 className='auth-form-title'>Войти</h1>
            <label className='label'>Логин:
                <input type='text'
                    placeholder='Username'
                    className='input'/>
            </label>
            <label className='label'>Пароль:
                <input type='password'
                    placeholder='Password'
                    className='input'/>
            </label>
            <div className='confirm-btns'>
                <button type='submit' className='btn'>Подтвердить</button>
                <Link to={'/register'} className='login-link'>Еще не зарегистрированы?</Link>
            </div>
        </div>
    </form>
}