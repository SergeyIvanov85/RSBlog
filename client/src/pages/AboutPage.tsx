import React from 'react';
import { useTranslation } from 'react-i18next';

const ghIcon = require('../assets/images/github-icon.png');
const sergeyAvatar = require('../assets/images/sergey-avatar.jpg');
const svetlanaAvatar = require('../assets/images/sveta-avatar.png');
const ninaAvatar = require('../assets/images/nina-avatar.jpg');

export const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className='section-wrapper about'>
            <div className='about__goals'>
                <h2>{t('about.title-goal')}</h2>
                <p>{t('about.goal')}</p>
            </div>
            <div className='about__team'>
                <h2>{t('about.title-team')}</h2>
                <div className='team-members-grid'>
                    <div className='team-member'>
                        <div className='team-member__avatar sergey'>
                            <img src={sergeyAvatar} alt="Sergey" />
                        </div>
                        <div className='team-member__role'>
                            <h3>{t('about.sergey')}</h3>
                            <p>Team lead, Back-end Developer</p>
                        </div>
                        <p className='team-member__description'>{t('about.sergey-contribution')}</p>
                        <div className='team-member__git'>
                            <a href='https://github.com/SergeyIvanov85' className='github-link'>
                                <img src={ghIcon} alt='Github:'></img>
                                <p>SergeyIvanov85</p>
                            </a>
                        </div>
                    </div>
                    <div className='team-member'>
                        <div className='team-member__avatar nina'>
                            <img src={ninaAvatar} alt="Nina" />
                        </div>
                        <div className='team-member__role'>
                            <h3>{t('about.nina')}</h3>
                            <p>Front-End Developer</p>
                        </div>
                        <p className='team-member__description'>{t('about.nina-contribution')}</p>       
                        <div className='team-member__git'>
                            <a href='https://github.com/Ponomareva-Nina' className='github-link'>
                                <img src={ghIcon} alt='Github:'></img>
                                <p>Ponomareva-Nina</p>
                            </a>
                        </div>
                    </div>
                    <div className='team-member'>
                        <div className='team-member__avatar svetlana'>
                            <img src={svetlanaAvatar} alt="Svetlana" />
                        </div>
                        <div className='team-member__role'>
                            <h3>{t('about.svetlana')}</h3>
                            <p>Front-End Developer</p>
                        </div>
                        <p className='team-member__description'>{t('about.svetlana-contribution')}</p>
                        <div className='team-member__git'>
                            <a href='https://github.com/Swettlana' className='github-link'>
                                <img src={ghIcon} alt='Github:'></img>
                                <p>Swettlana</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}