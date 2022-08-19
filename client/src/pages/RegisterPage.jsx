import React from 'react';
import {Link} from 'react-router-dom';

export const RegisterPage = () => {
    return <form onSubmit={e => e.preventDefault()} className='section-wrapper form-container'>
        <div className='form-inner'>
            <h1 className='auth-form-title'>Регистрация</h1>
            <label className='label'>Логин:
                <input type='text'
                    placeholder='Username'
                    className='text-input'/>
            </label>
            <label className='label'>Пароль:
                <input type='password'
                    placeholder='Password'
                    className='text-input'/>
            </label>
            <div className='confirm-btns'>
                <button type='submit' className='btn'>Подтвердить</button>
                <Link to={'/login'} className='login-link'>Уже зарегистрированы?</Link>
            </div>
        </div>
    </form>
}