import React, { useEffect } from "react";
import { PostItem } from "../components/PostItem";
import { RightSideMenu } from "../components/RightSideMenu";
import { getAllPosts } from "../redux/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const FeedPostsPage = () => {
  const dispatch = useAppDispatch();
  const { posts, popularPosts, topicPosts } = useAppSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <div className=''>Статей не существует.</div>;
  }

  return (
    <div className='section-wrapper'>
      <div className='feed-page__wrapper'>
        <div className='feed-feed__wrapper'>
          {posts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
        </div>
        <RightSideMenu />
      </div>
    </div>
  );
};
