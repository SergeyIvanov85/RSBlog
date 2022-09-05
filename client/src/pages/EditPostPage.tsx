import React, {useCallback, useEffect, useState} from "react";
import {useAppDispatch} from "../redux/hooks";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../utils/axios";
import {updatePost} from "../redux/features/post/postSlice";
import { useTranslation } from 'react-i18next';

export const EditPostPage = () => {
    const { t } = useTranslation();
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [oldImage, setOldImage] = useState<File | null>(null)
    const [newImage, setNewImage] = useState<File | null>(null)
    const [topic, setTopic] = useState('')

    const dispatch = useAppDispatch()
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
            const updatedPost = new FormData()
            updatedPost.append('title', title)
            updatedPost.append('text', text)
            // @ts-ignore
            updatedPost.append('id', params.id)
            updatedPost.append('image', newImage as Blob)
            updatedPost.append('topic', topic)
            dispatch(updatePost(updatedPost))
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setText('')
        setTitle('')
        setTopic('')
        navigate('/posts')
    }

    useEffect(() => {
        fetchPost()
    },[fetchPost])



    return <form className='section-wrapper' onSubmit={e => e.preventDefault()}>
        <div className='form-container'>
            <div className='add-image'>
                <input type="file" name='add-image__input' id='add-image__input' accept='.jpeg, .jpg, .png, .heic' className='hidden' onChange={(e) => {
                    if (e.target.files !== null) {
                    setNewImage(e.target.files[0])
                    setOldImage(null)
                    }
                }}/>
                <label htmlFor='add-image__input' className='add-image__label'>{t('add-post-page.add-image')}</label>
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
                <label htmlFor='add-title__input'>{t('add-post-page.title')}</label>
                <input type='text' id='add-title__input' className='text-input'value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t('add-post-page.title-placeholder')}/>
            </div>


            <div className='add-text'>
                <label htmlFor='add-text__input'>{t('add-post-page.text')}
                    <textarea id='add-text__input' onChange={(e) => setText(e.target.value)} value={text} placeholder={t('add-post-page.text-placeholder')} rows={7} className='text-input'/>
                </label>
            </div>

            <div className='add-topic'>
                <label htmlFor='add-topic__select'>{t('add-post-page.topic')}
                    <select name='add-topic__select' onChange={(e) => setTopic(e.target.value)} value={topic} id='add-topic__select' className='add-topic__select'>
                        <option value='' disabled>{t('add-post-page.topic-placeholder')}</option>
                        <option value='travel'>{t('add-post-page.traveling')}</option>
                        <option value='health'>{t('add-post-page.health')}</option>
                        <option value='education'>{t('add-post-page.education')}</option>
                        <option value='sport'>{t('add-post-page.sport')}</option>
                        <option value='other'>{t('add-post-page.other')}</option>
                    </select>
                </label>
            </div>

            <div className='add-post-btns'>
                <button onClick={submitHandler} className='btn'>{t('add-post-page.add')}</button>
                <button onClick={clearFormHandler} className='btn'>{t('add-post-page.cancel')}</button>
            </div>
        </div>
    </form>
}