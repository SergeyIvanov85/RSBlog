import React from 'react';
import githubImage from '../assets/images/github-icon.png';
import rsLogo from '../assets/images/rs-logo.png';

export const MainPage = () => {
    return <div className='main-container'>
        <main className='section-wrapper main'>
            <div className='main-description'>
            <h1 className='title'>FREE RS BLOG</h1>
            <p>Делись своими историями на платформе RS Blog, читай статьи на любые темы и&nbsp;находи для себя интересных людей.</p>
                <div className='auth-btns'>
                    <button className='btn registration-btn'>Регистрация</button>
                    <button className='btn login-btn'>Войти</button>
                </div>
            </div>
        </main>  
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <ul className='members'>
                    <li className='member-github'>
                        <a href='https://github.com/SergeyIvanov85' className='github-link'>
                            <img src={githubImage} alt='Github:'></img>
                            <p>SergeyIvanov85</p>
                        </a>
                    </li>
                    <li className='member-github'>
                        <a href='https://github.com/Ponomareva-Nina' className='github-link'>
                            <img src={githubImage} alt='Github:'></img>
                            <p>Ponomareva-Nina</p>
                        </a>
                    </li>
                    <li className='member-github'>
                        <a href='https://github.com/Swettlana' className='github-link'>
                            <img src={githubImage} alt='Github:'></img>
                            <p>Swettlana</p>
                        </a>
                    </li>
                </ul>
                <div className='rs-logo'>
                    <a href='https://rs.school/'><img src={rsLogo} alt='RS School'></img></a>
                </div>
            </div>
        </footer>
    </div>
}