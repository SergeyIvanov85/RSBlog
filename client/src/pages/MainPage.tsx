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
                        <h2>{t('main.block-title1')}</h2>
                        <p>{t('main.block-text1')}</p>
                        <p className="note">* {t('main.note')} &#128579;</p>
                    </div>
                    <img src={hangoutsImg} alt=''/>
                    <img src={communityImg} alt=''/>
                    <div className="text">
                        <h2>{t('main.block-title2')}</h2>
                        <p>{t('main.block-text2')}</p>
                    </div>
                    <div className="text">
                        <h2>{t('main.block-title3')} &#128200;</h2>
                        <p>{t('main.block-text2')}</p>
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