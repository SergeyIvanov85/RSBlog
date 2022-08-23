import React from "react";
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'
import Moment from 'react-moment'

export const PostItem = ({ post }) => {

  if(!post) {
    return (
      <div className=''>Статей не существует.</div>
    )
  }

  return <div className=''>
    <div className=''>IMAGE</div>
    <div className=''>
      <div className=''>{post.username}</div>
      <div className=''><Moment date={post.createdAt} format='D MMM YYYY' /></div>
    </div>
    <div className=''>{post.title}</div>
    <p className=''>{post.text}</p>

    <div className=''>
      <button className=''>
        <AiFillEye /> <span>{post.views}</span>
      </button>
      <button className=''>
        <AiOutlineMessage /> <span>{post.comments?.length}</span>
      </button>
    </div>


  </div>
}