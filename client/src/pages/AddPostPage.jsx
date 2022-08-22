import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {createPost} from "../redux/features/post/postSlice";
import {useNavigate} from "react-router-dom";

export  const AddPostPage = () => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('text', text)
      data.append('image', image)
      dispatch(createPost(data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const clearFormHandler = () => {
    setText('')
    setTitle('')
  }

    return <form className='' onSubmit={e => e.preventDefault()}>
        <label className=''>Прикрепить изображение:
          <input type="file" className='hidden' onChange={(e) => setImage(e.target.files[0])}/>
        </label>

        <div className=''>
          { image && (
            <img src={URL.createObjectURL(image)} alt='image' />
          )}
        </div>

        <label className=''>Заголовок статьи:
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Заголовок' className=''/>
        </label>

        <label className=''>Текст статьи:
          <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder='Введите текст...' className=''/>
        </label>

      <label className=''>Тема статьи:
        <select name='select' className=''>
          <option defaultValue='value-title'>Другое</option>
        </select>
      </label>

      <div className=''>
        <button onClick={submitHandler} className=''>Добавить</button>
        <button onClick={clearFormHandler} className=''>Отменить</button>
      </div>
    </form>
}