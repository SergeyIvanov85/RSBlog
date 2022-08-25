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

    return <div className=''>
        <div className=''>
            <div className=''>POST
                <div className=''>
                    <div
                      className={
                          post.imgUrl ? '' : ''
                      }
                    >
                        {post.imgUrl && (
                          <img
                            src={`http://localhost:3002/${post.imgUrl}`}
                            alt='img'
                            className=''
                          />
                        )}
                    </div>
                    <div className='blog-info__caption'>
                        <div className=''>{post.username}</div>
                        <div className=''><Moment date={post.createdAt} format='D MMM YYYY' /></div>
                    </div>
                    <div className='blog-info__title'>{post.title}</div>
                </div>

                <p className='blog__text'>{post.text}</p>

                <div className='blog__count'>
                    <button className=''><Link to={'/feed'}>Назад</Link></button>
                    <div className="icon">
                        <button className='button-icon'>
                            <AiFillEye /> <span>{post.views}</span>
                        </button>
                        <button className='button-icon'>
                            <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className=''>COMMENTS</div>
        </div>
    </div>
}