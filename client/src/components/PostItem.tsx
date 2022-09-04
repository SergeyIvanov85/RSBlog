import { FC } from "react";
import {AiFillEye, AiOutlineLike, AiOutlineMessage} from "react-icons/ai";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { IPost } from "../models";
import { useTranslation } from 'react-i18next';
interface IPostItemProps {
  key: number;
  post: IPost;
}

export const PostItem: FC<IPostItemProps> = ({ key, post }) => {
  const { t } = useTranslation();
  if (!post) {
    return <div className=''>{t('post-item.loading')}</div>;
  }

  return (
    <Link to={`/${post._id}`}>
      <div className='blog'>
        <div className='blog-info'>
          <div
            className={
              post.imgUrl ? "blog-info__image" : "blog-info__image_no-img"
            }
            style={
              post.imgUrl
                ? {
                    backgroundImage: `url(${`http://localhost:3002/${post.imgUrl}`})`,
                  }
                : {}
            }
          ></div>
          <div className='blog-info__caption'>
            <div className=''>{post.username}</div>
            <div className=''>
              <Moment date={post.createAt} format='D MMM YYYY' />
            </div>
          </div>
          <div className='blog-info__title'>{post.title}</div>
        </div>

        <p className='blog__text'>{post.text}</p>

        <div className='blog__count'>
          <div className='icon'>
            <button className='button-icon'>
              <AiFillEye /> <span>{post.views}</span>
            </button>
            <button className='button-icon'>
              <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
            </button>
          </div>
          <button className='button-icon'>
            <span>{post.likes}</span>
            <AiOutlineLike />
          </button>
        </div>
      </div>
    </Link>
  );
};
