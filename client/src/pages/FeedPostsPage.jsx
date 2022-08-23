import React, {useEffect} from "react";
import {PostItem} from "../components/PostItem";
import {RightSideMenu} from "../components/RightSideMenu";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../redux/features/post/postSlice";


export const FeedPostsPage = () => {

  const dispatch = useDispatch()
  const {posts, popularPosts, topicPosts} = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAllPosts())
  },[dispatch])

  if(!posts.length) {
    return (
      <div className=''>Статей не существует.</div>
    )
  }


  return <div className=''>
    <div className=''>
      <div className=''>
        {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
        <PostItem />
      </div>
      <div className=''>
        <RightSideMenu />
      </div>
    </div>
  </div>
}