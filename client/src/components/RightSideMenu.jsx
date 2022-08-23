import React from "react";
import {AiOutlineVerticalAlignTop} from 'react-icons/ai'
import {BsSortDown} from 'react-icons/bs'

export const RightSideMenu = () => {
  return <div className=''>
    <label htmlFor='' className=''>ПОИСК</label>
    <input type='search' id='' name='' className='' placeholder='Введите ключевое слово'/>
    <div className=''>СОРТИРОВАТЬ:</div>
    <div className=''>
      <div className=''>по новизне</div>
      <AiOutlineVerticalAlignTop />
    </div>
    <div className=''>
      <div className=''>по популярности</div>
      <AiOutlineVerticalAlignTop />
    </div>
    <div className=''>ТЕМЫ:</div>
    <div className=''>
      <div className=''>
        <BsSortDown />
        <div className=''>Путешествия</div>
      </div>
      <div className=''>
        <BsSortDown />
        <div className=''>Образование</div>
      </div>
      <div className=''>
        <BsSortDown />
        <div className=''>Спорт</div>
      </div>
      <div className=''>
        <BsSortDown />
        <div className=''>Здоровье</div>
      </div>
    </div>


  </div>
}