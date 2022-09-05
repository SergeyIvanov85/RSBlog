import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {checkIsAuth, registerUser} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { status } = useAppSelector((state) => state.auth)
    const isAuth = useAppSelector(checkIsAuth)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(status) {
            toast(status)
        }
        if(isAuth) navigate('/')
    }, [status, isAuth, navigate])

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
            <h1 className='auth-form-title'>{t('register-page.title')}</h1>

            <label className='label'>
            {t('register-page.username')}
                <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className='text-input'
                    autoComplete="off"/>
            </label>

            <label className='label'>
            {t('login-page.password')}
                <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='text-input'
                    autoComplete="off"/>
            </label>
            <div className='confirm-btns'>
                <button type='submit' onClick={handleSubmit} className='btn'>{t('register-page.submit')}</button>
                <Link to={'/login'} className='login-link'>{t('register-page.to-login')}</Link>
            </div>
        </div>
    </form>
}