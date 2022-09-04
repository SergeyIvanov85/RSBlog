import React, { useCallback, useEffect, useState } from "react";
import Moment from "react-moment";
import axios from "../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import { removePost } from "../redux/features/post/postSlice";
import {
  createComment,
  getPostComments,
} from "../redux/features/comments/commentSlice";
import { IPost } from "../models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  AiFillEye,
  AiOutlineMessage,
  AiTwotoneEdit,
  AiFillDelete,
  AiOutlineLike,
} from "react-icons/ai";

import { toast } from "react-toastify";
import { CommentItem } from "../components/CommentItem";

export const PostPage = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [comment, setComment] = useState("");

  const { user } = useAppSelector((state) => state.auth);
  const { comments } = useAppSelector((state) => state.comment);
  const navigate = useNavigate();
  const params = useParams();


  const dispatch = useAppDispatch();

  const removePostHandler = () => {
    try {
      dispatch(removePost(params.id as string));
      toast("Ваш пост был удален!");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSubmit = () => {
    try {
      const postId = params.id as string;
      dispatch(createComment({ postId, comment }));
      setComment("");
      toast("Ваш комментарий отправлен!");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getPostComments(params.id as string));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get<IPost>(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  if (!post) {
    return <div className=''>Загрузка...</div>;
  }
  return (
    <div className='section-wrapper'>
      <div className='post-page__wrapper'>
        <div className='post__wrapper'>
          <div
            className={post!.imgUrl ? "post__image" : ""}
            style={{
              backgroundImage: `url(${`http://localhost:3002/${post.imgUrl}`})`,
            }}
          ></div>
          <div className='post__caption'>
            <p> {post.username} </p>
            <p>
              {" "}
              <Moment date={post.createdAt} format='D MMM YYYY' />{" "}
            </p>
          </div>
          <div className='post__title'>
            <p> {post.title}</p>
          </div>
          <div className='post__text'>
            <p>{post.text}</p>
          </div>
          <div className='post__buttons'>
            <button className='btn'>
              <Link to={"/feed"}>Назад</Link>
            </button>
            <div className='post__buttons_icons'>
              <div className='icon'>
                <button className='button-icon'>
                  <AiFillEye /> <span>{post.views}</span>
                </button>
                <button className='button-icon'>
                  <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                </button>
                <button className='button-icon'>
                  <AiOutlineLike /> <span>{post.likes}</span>
                </button>
              </div>
              {user?._id === post.author && (
                <div className='icon__change'>
                  <button className=''>
                    <Link to={`/${params.id}/edit`}>
                      <AiTwotoneEdit />
                    </Link>
                  </button>
                  <button onClick={removePostHandler} className=''>
                    <AiFillDelete />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='comments'>
          <div className='comments__button-close'></div>
          <div className='comments__list'>
            {comments?.map((cmt) => (
              <CommentItem cmt={cmt} />
            ))}
          </div>

          <form className='' onSubmit={(e) => e.preventDefault()}>
            <textarea
              className=''
              rows={10}
              cols={45}
              name='text'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Комментировать'
            ></textarea>
          </form>

          <div className='comments__buttons'>
            <button
              className='btn btn_small'
              type='submit'
              onClick={handlerSubmit}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
