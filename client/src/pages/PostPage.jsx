import React, {useCallback, useEffect, useState} from "react";
import Moment from "react-moment";
import {AiFillEye, AiOutlineMessage} from "react-icons/ai";
import axios from "../utils/axios";
import {Link, useParams} from "react-router-dom";

export const PostPage = () => {
    const [post, setPost] = useState(null)
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const {data} = await axios.get(`/posts/${params.id}`)
        setPost(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    if(!post) {
        return (
          <div className=''>Загрузка...</div>
        )
    }

    return <div className='section-wrapper'>
<div className='post-page__wrapper'>
  <div className='post__wrapper'>
    <div className={post.imgUrl ? 'post__image' : ''}
         style={{ backgroundImage: `url(${`http://localhost:3002/${post.imgUrl}`})` }}>
    </div>
    <div className='post__caption'>
        <p> {post.username} </p>
        <p> <Moment date={post.createdAt} format='D MMM YYYY' /> </p>
    </div>
    <div className='post__title'>
        <p> {post.title}</p>
    </div>
    <div className='post__text'>
        <p>{post.text}</p>
    </div>
    <div className='post__buttons'>
        <button className='btn'><Link to={'/feed'}>Назад</Link></button>
        <div className='post__buttons_icons'>
            <div className='icon'>
                <button className='button-icon'>
                    <AiFillEye /> <span>{post.views}</span>
                </button>
                <button className='button-icon'>
                    <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                </button>
            </div>
            <div className='icon__change'>
                <div className='icon__change_edit'></div>
                <div className='icon__change_delete'></div>
            </div>
        </div>
    </div>
  </div>
  <div className='comments'>
    <div className='comments__button-close'></div>
    <div className='comments__list'>
        <div className='comment-item'>
            <div className='comment-item__user'>S1</div>
            <div className='comment-item__text'>Tddddddddddddddddddddddddnt</div>
        </div>
        <div className='comment-item'>
            <div className='comment-item__user'>S2</div>
            <div className='comment-item__text'>Tdfddddddddnt</div>
        </div>
        <div className='comment-item'>
            <div className='comment-item__user'>S3</div>
            <div className='comment-item__text'>Tdddddddddddddnt</div>
        </div>
        <div className='comment-item'>
            <div className='comment-item__user'>S4</div>
            <div className='comment-item__text'>Tdfdddddddddddddddddddddddddnt</div>
        </div>
        <div className='comment-item'>
            <div className='comment-item__user'>S5</div>
            <div className='comment-item__text'>Tdfdddddddddddddddnt</div>
        </div>  
    </div>
    <textarea placeholder='Комментировать'></textarea>
    <div className='comments__buttons'>
        <button className='btn btn_small'>Удалить</button>
        <button className='btn btn_small'>Сoхранить</button>
    </div>
    </div>
</div>
    </div>
}