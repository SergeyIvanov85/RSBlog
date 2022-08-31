import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { IPost } from "../models";

interface IPostItemProps {
  key: number;
  post: IPost;
}

export const PostItem = (postItem: IPostItemProps) => {
  if (!postItem.post) {
    return <div className=''>Загрузка...</div>;
  }

  return (
    <Link to={`/${postItem.post._id}`}>
      <div className='blog'>
        <div className='blog-info'>
          <div
            className={
              postItem.post.imgUrl
                ? "blog-info__image"
                : "blog-info__image_no-img"
            }
            style={{
              backgroundImage: `url(${`http://localhost:3002/${postItem.post.imgUrl}`})`,
            }}
          ></div>
          <div className='blog-info__caption'>
            <div className=''>{postItem.post.username}</div>
            <div className=''>
              <Moment date={postItem.post.createAt} format='D MMM YYYY' />
            </div>
          </div>
          <div className='blog-info__title'>{postItem.post.title}</div>
        </div>

        <p className='blog__text'>{postItem.post.text}</p>

        <div className='blog__count'>
          <div className='icon'>
            <button className='button-icon'>
              <AiFillEye /> <span>{postItem.post.views}</span>
            </button>
            <button className='button-icon'>
              <AiOutlineMessage />{" "}
              <span>{postItem.post.comments?.length || 0}</span>
            </button>
          </div>
          <button className='button-icon'> Подробнее </button>
        </div>
      </div>
    </Link>
  );
};
