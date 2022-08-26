import React from 'react'

export const CommentItem = ({ cmt }) => {
  const avatar = cmt.comment.trim().toUpperCase().split('').slice(0, 2)
  return (
    <div className='comment-item'>
      <div className='comment-item__user'>{avatar}</div>
      <div className='comment-item__text'>{cmt.comment}</div>
    </div>
  )
}


