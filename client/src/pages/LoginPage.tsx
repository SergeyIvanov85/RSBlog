import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {checkIsAuth, loginUser} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";
import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { status } = useAppSelector((state) => state.auth)
    const isAuth = useAppSelector(checkIsAuth)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if(status) {
            toast(status)
        }
        if(isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ username, password}))
        } catch (error) {
            console.log(error)
        }
    }
    
    return <form onSubmit={e => e.preventDefault()}className='section-wrapper form-container'>
        <div className='form-inner'>
            <h1 className='auth-form-title'>{t('login-page.title')}</h1>
            <label className='label'>{t('login-page.username')}
                <input type='text'
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder='Username'
                       className='text-input'
                       autoComplete="on"/>
            </label>
            <label className='label'>{t('login-page.password')}
                <input type='password'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder='Password'
                       className='text-input'
                       autoComplete="on"/>
            </label>
            <div className='confirm-btns'>
                <button type='submit' onClick={handleSubmit} className='btn'>{t('login-page.submit')}</button>

                <Link to={'/register'} className='login-link'>{t('login-page.to-register')}</Link>
            </div>
        </div>
    </form>
}