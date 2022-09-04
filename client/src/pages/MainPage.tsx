import React from "react";
import { useTranslation } from 'react-i18next';

const ghIcon = require('../assets/images/github-icon.png');
const rsLogo = require('../assets/images/rs-logo.png');
const communityImg = require('../assets/images/community.png');
const hangoutsImg = require('../assets/images/hangouts.png');
const settingsImg = require('../assets/images/settings.png');

export const MainPage = () => {
    const { t } = useTranslation();
    
    return <div className='main-container'>
        <main className='section-wrapper main'>
            <h1 className='title'>{t('main.welcome')}FREE RS BLOG</h1>
            <div className='main-description'> 
                    <div className="text">
                        <h2>Платформа для творчества</h2>
                        <p>Делись своими историями, идеями и размышлениями без ограничений по количеству символов.
                        <br/>А также читай статьи других пользователей, выбирая интересующие темы по тегам.</p>
                        <p className="note">* бесплатно и без sms &#128579;</p>
                    </div>
                    <img src={hangoutsImg} alt=''/>
                    <img src={communityImg} alt=''/>
                    <div className="text">
                        <h2>Большое и дружное комьюнити </h2>
                        <p>Находи новых друзей и интересных для себя людей в RS Blog. Поддерживай авторов лайками &#128151; и обсуждай статьи в комментариях.</p>
                    </div>
                    <div className="text">
                        <h2>Кастомизация и статистика &#128200;</h2>
                        <p>Заходи в меню пользователя и отслеживай статистику профиля за разные периоды времени, а также меняй настройки языка и темы по своим предпочтениям.</p>
                    </div>
                    <img src={settingsImg} alt=''/>
            </div>
        </main>
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <ul className='members'>
                    <li className='member-github'>
                        <a href='https://github.com/SergeyIvanov85' className='github-link'>
                            <img src={ghIcon} alt='Github:'></img>
                            <p>SergeyIvanov85</p>
                        </a>
                    </li>
                    <li className='member-github'>
                        <a href='https://github.com/Ponomareva-Nina' className='github-link'>
                            <img src={ghIcon} alt='Github:'></img>
                            <p>Ponomareva-Nina</p>
                        </a>
                    </li>
                    <li className='member-github'>
                        <a href='https://github.com/Swettlana' className='github-link'>
                            <img src={ghIcon} alt='Github:'></img>
                            <p>Swettlana</p>
                        </a>
                    </li>
                </ul>
                <div className='rs-logo'>
                    <a href='https://rs.school/'><img src={rsLogo} alt='RS School'></img></a>
                    <p>2022</p>
                </div>
            </div>
        </footer>
    </div>
}