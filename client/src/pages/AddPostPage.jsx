import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {createPost} from "../redux/features/post/postSlice";
import {useNavigate} from "react-router-dom";

export  const AddPostPage = () => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [topic, setTopic] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('text', text)
      data.append('image', image)
      data.append('topic', topic)
      dispatch(createPost(data))
      navigate('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  const clearFormHandler = () => {
    setText('')
    setTitle('')
    setImage('')
    setTopic('')
  }

    return <form className='section-wrapper' onSubmit={e => e.preventDefault()}>
      <div className='form-container'>
      <div className='add-image'>
        <input type="file" name='add-image__input' id='add-image__input' accept='.jpeg, .jpg, .png, .heic' className='hidden' onChange={(e) => setImage(e.target.files[0])}/>
      <label htmlFor='add-image__input' className='add-image__label'>Прикрепить изображение:</label>
        <div className='image-preview'>
          { image && (
            <img src={URL.createObjectURL(image)} alt={image.name}/>
          )}
        </div>
        </div>

        <div className='add-title'>
        <label htmlFor='add-title__input'>Заголовок статьи:</label>
          <input type='text' id='add-title__input' className='text-input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Заголовок'/>
        </div>


        <div className='add-text'>
        <label htmlFor='add-text__input'>Текст статьи:
          <textarea id='add-text__input' onChange={(e) => setText(e.target.value)} value={text} placeholder='Введите текст...' rows='7' className='text-input'/>
        </label>
        </div>

        <div className='add-topic'>
      <label htmlFor='add-topic__select'>Тема статьи:
        <select name='add-topic__select' onChange={(e) => setTopic(e.target.value)} value={topic} id='add-topic__select' className='add-topic__select'>
          <option>Выбрать тему:</option>
          <option value='travel'>Путешествия</option>
          <option value='health'>Здоровье</option>
          <option value='education'>Образование</option>
          <option value='sport'>Спорт</option>
          <option value='other'>Другое</option>
        </select>
      </label>
        </div>

      <div className='add-post-btns'>
        <button onClick={submitHandler} className='btn'>Добавить</button>
        <button onClick={clearFormHandler} className='btn'>Отменить</button>
      </div>
      </div>
    </form>
}