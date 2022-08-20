import { Comments } from "./post-page/comment";
import { Post } from "./post-page/post";

export const PostPage = () => {
  return (
    <div className='post-page__wrapper '>
      <Post />
      <Comments />
    </div>
  );
};
