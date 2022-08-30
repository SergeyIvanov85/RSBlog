import React, { useState } from "react";
import {useAppDispatch} from "../redux/hooks";
import {createPost} from "../redux/features/post/postSlice";
import {Link, useNavigate} from "react-router-dom";
import { INewPost } from "../models";

export  const AddPostPage = () => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [topic, setTopic] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    try {
      let data: INewPost = {
        image: image,
        title: title,
        text: text,
        topic: topic,
      }
      dispatch(createPost(data))
      navigate('/feed')
    } catch (error) {
      console.log(error)
    }
  }

  const clearFormHandler = () => {
    setText('')
    setTitle('')
    setImage(null)
    setTopic('')
  }

    return <form name="AddPostForm" className='section-wrapper' onSubmit={e => e.preventDefault()}>
      <div className='form-container'>
      <div className='add-image'>
        <input type="file" name='add-image__input' id='add-image__input' accept='.jpeg, .jpg, .png, .heic' className='hidden' onChange={(e) => { if(e.target.files !== null ) { setImage(e.target.files[0])}}}/>
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
            <textarea id='add-text__input' onChange={(e) => setText(e.target.value)} value={text} placeholder='Введите текст...' rows={7} className='text-input'/>
          </label>
        </div>

        <div className='add-topic'>
          <label htmlFor='add-topic__select'>Тема статьи:
            <select name='add-topic__select' onChange={(e) => setTopic(e.target.value)} value={topic} id='add-topic__select' className='add-topic__select'>
              <option value='' disabled>Выбрать тему:</option>
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
        <button onClick={clearFormHandler} className='btn'><Link to={'/posts'}>Отменить</Link></button>
      </div>
      </div>
    </form>
}