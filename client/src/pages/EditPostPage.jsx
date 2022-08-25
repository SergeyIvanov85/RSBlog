import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../utils/axios";

export const EditPostPage = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [oldImage, setOldImage] = useState('')
    const [newImage, setNewImage] = useState('')
    const [topic, setTopic] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const {data} = await axios.get(`/posts/${params.id}`)
        setTitle(data.title)
        setText(data.text)
        setOldImage(data.imgUrl)
        setTopic(data.topic)
    }, [params.id])

    const submitHandler = () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setText('')
        setTitle('')
        setTopic('')
    }

    useEffect(() => {
        fetchPost()
    },[fetchPost])



    return <form className='section-wrapper' onSubmit={e => e.preventDefault()}>
        <div className='form-container'>
            <div className='add-image'>
                <input type="file" name='add-image__input' id='add-image__input' accept='.jpeg, .jpg, .png, .heic' className='hidden' onChange={(e) => {
                    setNewImage(e.target.files[0])
                    setOldImage('')
                }}/>
                <label htmlFor='add-image__input' className='add-image__label'>Прикрепить изображение:</label>
                <div className='image-preview'>
                    { oldImage && (
                      <img src={`http://localhost:3002/${oldImage}`} alt={oldImage.name}/>
                    )}
                    { newImage && (
                      <img src={URL.createObjectURL(newImage)} alt={newImage.name}/>
                    )}
                </div>
            </div>

            <div className='add-title'>
                <label htmlFor='add-title__input'>Заголовок статьи:</label>
                <input type='text' id='add-title__input' className='text-input'value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Заголовок'/>
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