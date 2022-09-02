import axios from "axios";
import Moment from "react-moment";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IPost } from "../models";
import {
  createComment,
  getPostComments,
} from "../redux/features/comments/commentSlice";
import { removePost } from "../redux/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  AiFillEye,
  AiOutlineMessage,
  AiTwotoneEdit,
  AiFillDelete,
} from "react-icons/ai";

//import {toast} from "react-toastify";
//import {CommentItem} from "../components/CommentItem";

export const PostPage = () => {
  //const [post, setPost] = useState({});
  const post = {
    _id: "631111462b8b7797e8bc2a27",
    username: "Sweta",
    title: "With Image",
    text: "Test3",
    imgUrl: "1662062918152ÐÐ²ÐµÐ·Ð´Ð¾Ð¿Ð°Ð´Ñ.jpg",
    views: 6,
    likes: 0,
    author: "630d2488b3ad0d6a89b385aa",
    comments: [
      "6311c7494e0d4c43403bc9ee",
      "6311c7634e0d4c43403bc9f5",
      "6311c7d84e0d4c43403bca0d",
    ],
    topic: "health",
    createdAt: "2022-09-01T20:08:38.155Z",
    updatedAt: "2022-09-02T11:10:15.601Z",
    __v: 0,
  };

  const [comment, setComment] = useState("");

  const { user } = useAppSelector((state) => state.auth);
  const { comments } = useAppSelector((state) => state.comment);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const removePostHandler = () => {
    try {
      if (params.id) {
        dispatch(removePost(params!.id));
        toast("Ваш пост был удален!");
        navigate("/posts");
      }
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

  if (Object.keys(post).length === 0) {
    return <div className=''>Загрузка...</div>;
  } else {
    return (
      <div className='section-wrapper'>
        <div className='post-page__wrapper'>
          <div className='post__wrapper'>
            <div
              className={post.imgUrl ? "post__image" : ""}
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
                    <AiOutlineMessage />{" "}
                    <span>{post.comments?.length || 0}</span>
                  </button>
                </div>
                {/*{user?._id === post.author && (
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
                )}*/}
              </div>
            </div>
          </div>
          <div className='comments'>
            <div className='comments__button-close'></div>
            <div className='comments__list'>
              {/*{comments?.map((cmt) => (
                <CommentItem key={cmt._id} cmt={cmt} />
            ))}*/}
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
  }
};
function toast(_arg0: string) {
  throw new Error("Function not implemented.");
}
function setPost(data: IPost) {
  throw new Error("Function not implemented.");
}
