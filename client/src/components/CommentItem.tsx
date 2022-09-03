import React, { FC } from "react";
import { IComment } from "../models";
interface ICommentProps {
  cmt: IComment;
}

export const CommentItem: FC<ICommentProps> = ({ cmt }) => {
  const avatar = cmt.comment.trim().toUpperCase().split("").slice(0, 2);
  return (
    <div className='comment-item'>
      <div className='comment-item__user'>{avatar}</div>
      <div className='comment-item__text'>{cmt.comment}</div>
    </div>
  );
};
