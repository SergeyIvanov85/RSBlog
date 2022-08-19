import React from 'react';

export  const AddPostPage = () => {
    return <div>
        {/*проверка на наличие созданных статей, если нет, то */}
            <h1 className='no-posts-title'>Кажется вы еще не добавили ни одной статьи &#129300;</h1>
        
        {/*проверка на наличие созданных статей, если нет, то */}
            <div className="section-wrapper user-posts">
            <button className="btn">Добавить cтатью</button>
                {/*тут выводятся существующие статьи пользователя*/}
            </div>

         {/*форма добавления статьи при клике на кнопку Добавить статью*/}
        <form onSubmit={e => e.preventDefault()}className='section-wrapper'>
            <div className='form-container'>
                <div className='add-image'>
                    <input type='file'
                    name='add-image__input'
                    id='add-image__input'
                    accept='.jpeg, .jpg, .png, .heic'
                    />
                    <label for='add-image__input' className='add-image__label'>Прикрепить изображение</label>
                </div>
                <div className='add-title'>
                    <label for='add-title__input'>Заголовок:</label> 
                    <input type='text'
                        id='add-title__input'
                        className='text-input'/>
                </div>
                <div className='add-text'>
                <label for='add-text__input'>Текст статьи:</label> 
                    <textarea id='add-text__input'
                        placeholder='Введите текст'
                        rows='7'
                        className='text-input'>
                    </textarea>
                </div>
                <div className='add-topic'>
                <label for='add-topic__select'>Тема статьи:</label> 
                    <select name='add-topic__select' id='add-topic__select' className='add-topic__select'>
                        <option value='travel'>Путешествия</option>
                        <option value='health'>Здоровье</option>
                        <option value='education'>Образование</option>
                        <option value='sport'>Спорт</option>
                        <option value='other'>Другое</option>
                    </select>
                </div>
                <div className='add-post-btns'>
                    <button className='btn'>Добавить</button>
                    <button className='btn'>Отменить</button>
                </div>
            </div>
        </form>
    </div>
}