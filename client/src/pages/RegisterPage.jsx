import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/features/auth/authSlice";

export const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ username, password}))
            setPassword('')
            setUsername('')
        } catch (error) {
            console.log(error)
        }
    }


    return <form onSubmit={e => e.preventDefault()}
                 className='section-wrapper form-container'>
        <div className='form-inner'>
            <h1 className='auth-form-title'>Регистрация</h1>
        <label className='label'>
            Логин
            <input type='text'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   placeholder='Username'
                   className='input'
            />
        </label>

        <label className='label'>
            Пароль
            <input type='password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder='Password'
                   className='input'
            />
        </label>
        <div className='confirm-btns'>
            <button type='submit' onClick={handleSubmit} className='btn'>Подтвердить</button>
            <Link to={'/login'} className='login-link'>Уже зарегистрированы?</Link>
        </div>
        </div>
    </form>
}