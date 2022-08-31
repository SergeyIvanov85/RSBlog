import React from 'react';
import { PeriodItem, PeriodNames } from './interfaces';


export const StatisticsPage = () => {
  
  return (
    <div className='section-wrapper'>
        <div className='statistics'>
            <div className='statistics__upper'>
                <h1 className='statistics-title'>Ваша статистика</h1>
                <button className='btn'>Закрыть</button>
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
                            <p>просмотры</p> 
                        </li>
                        <li className='chart-indicators__item'>
                            <span className='chart-indicators__comments'></span>
                            <p>комментарии</p>
                        </li>
                        <li className='chart-indicators__item'>
                            <span className='chart-indicators__likes'></span>
                            <p>отметки "нравится"</p>
                        </li>
                    </ul>
                    <div className='chart-container'>
                        ГРАФИК
                    </div>
                </div>
                <div className='side-bar'>
                    <h2>Период:</h2>
                    <ul className='statistics-sort-list'>
                        {Object.entries(PeriodNames).map(title => <PeriodItem title={title[1]}/>)}
                    </ul>
                </div>
            </div>
            <div className='statistics__common'>
                <h2>Всего:</h2>
                <div className='common-indicators'>
                    <ul className='common-indicators__list'>
                        
                    </ul>
                </div>
                <div>
                    <h2>Лучшая статья за неделю:</h2>
                </div>
            </div>
        </div>
    </div>
  )
}