import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {checkIsAuth, registerUser} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";

export const RegisterPage = () => {
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
            <h1 className='auth-form-title'>Регистрация</h1>

            <label className='label'>
                Логин
                <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    className='text-input'
                />
            </label>

            <label className='label'>
                Пароль
                <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    className='text-input'
                />
            </label>
            <div className='confirm-btns'>
                <button type='submit' onClick={handleSubmit} className='btn'>Подтвердить</button>
                <Link to={'/login'} className='login-link'>Уже зарегистрированы?</Link>
            </div>
        </div>
    </form>
}