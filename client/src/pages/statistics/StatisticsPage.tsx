import React from 'react';
import { useTranslation } from 'react-i18next';

export const StatisticsPage = () => {
  const { t } = useTranslation();

  return (
    <div className='section-wrapper'>
        <div className='statistics'>
            <div className='statistics__upper'>
                <h1 className='statistics-title'>{t('statistics.title')}</h1>
                <button className='btn'>{t('statistics.close')}</button>
            </div>
            <div className='statistics__main'>
                <div className='statistics__chart'>
                    <div className='period'>
                        <button className='statistics-btn btn-prev'>&#8592;</button>
                        <p className='period__segment'>24.08.2022 - 31.08.2022</p>
                        <button className='statistics-btn btn-next'>&#8594;</button>
                    </div>
                    <ul className='chart-indicators'>
                        <li className='chart-indicators__item'>
                            <span className='chart-indicators__views'></span>
                            <p>{t('statistics.views')}</p> 
                        </li>
                        <li className='chart-indicators__item'>
                            <span className='chart-indicators__comments'></span>
                            <p>{t('statistics.comments')}</p>
                        </li>
                        <li className='chart-indicators__item'>
                            <span className='chart-indicators__likes'></span>
                            <p>{t('statistics.likes')}</p>
                        </li>
                    </ul>
                    <div className='chart-container'>
                        ГРАФИК
                    </div>
                </div>
                <div className='side-bar'>
                    <h2>{t('statistics.period')}</h2>
                    <ul className='statistics-sort-list'>
                        <li className='statistics-sort-item'><span></span>{t('statistics.week')}</li>
                        <li className='statistics-sort-item'><span></span>{t('statistics.month')}</li>
                        <li className='statistics-sort-item'><span></span>{t('statistics.year')}</li>
                    </ul>
                </div>
            </div>
            <div className='statistics__common'>
                <h2>{t('statistics.total')}</h2>
                <div className='common-indicators'>
                    <ul className='common-indicators__list'>
                        <li className='common-item common-posts'>
                            <p>{t('statistics.common-posts')}</p>
                            <div></div>
                        </li>
                        <li className='common-item common-views'>
                            <p>{t('statistics.common-views')}</p>
                            <div></div>
                        </li>
                        <li className='common-item common-comments'>
                            <p>{t('statistics.common-comments')}</p>
                            <div></div>
                        </li>
                        <li className='common-item common-likes'>
                            <p>{t('statistics.common-likes')}</p>
                            <div></div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>{t('statistics.best-post')}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}