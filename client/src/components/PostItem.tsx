import React from "react";
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'
import Moment from 'react-moment'
import {Link} from "react-router-dom";

export const PostItem = ({ post }) => {

  if (!post) {
    return (
      <div className=''>
        Загрузка...
      </div>
    )
  }


  return (
    <Link to={`/${post._id}`}>
      <div className='blog'>
        <div className="blog-info">
          <div className={post.imgUrl ? 'blog-info__image' : ''}
               style={{ backgroundImage: `url(${`http://localhost:3002/${post.imgUrl}`})` }}>
            {/*{post.imgUrl && (
         <img src={`http://localhost:3002/${post.imgUrl}`} )}*/}
            {/*className={post.imgUrl ? '' : ''}*/}
          </div>
          <div className='blog-info__caption'>
            <div className=''>{post.username}</div>
            <div className=''><Moment date={post.createdAt} format='D MMM YYYY' /></div>
          </div>
          <div className='blog-info__title'>{post.title}</div>
        </div>

        <p className='blog__text'>{post.text}</p>

        <div className='blog__count'>
          <div className="icon">
            <button className='button-icon'>
              <AiFillEye /> <span>{post.views}</span>
            </button>
            <button className='button-icon'>
              <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
            </button>
          </div>
          <button className='button-icon'> Подробнее </button>
        </div>
      </div>
    </Link>
  )
}