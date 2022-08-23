import React from "react";
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'
import Moment from 'react-moment'

export const PostItem = ({ post }) => {

  if(!post) {
    return (
      <div className=''>Статей не существует.</div>
    )
  }

  return <div className='blog-info'>
    <div className={post.imgUrl ? '' : ''}>
      {post.imgUrl && (
        <img src={`http://localhost:3002/${post.imgUrl}`} alt='img' className='blog-info__image'/>
      )}
    </div>
    <div className='blog-info__caption'>
      <div className=''>{post.username}</div>
      <div className=''><Moment date={post.createdAt} format='D MMM YYYY' /></div>
    </div>
    <div className='blog-info__title'>{post.title}</div>
    <p className='blog__text'>{post.text}</p>

    <div className='blog__count'>
      <button className=''>
        <AiFillEye /> <span>{post.views}</span>
      </button>
      <button className=''>
        <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
      </button>
    </div>


  </div>
}