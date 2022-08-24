import React from "react";
import {PostItem} from "../components/PostItem";
import {useDispatch, useSelector} from "react-redux";

export const PostsPage = () => {

    const {posts} = useSelector((state) => state.post)

    if(!posts.length) {
      return (
        <div className='no-posts'>Кажется, вы еще не добавили ни одной статьи &#129300;</div>
      )
    }

    return <div className='section-wrapper'>
        <div className='user-posts'>
            {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
        </div>
    </div>
}