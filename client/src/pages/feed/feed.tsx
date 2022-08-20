import { BlogPrev } from "./blog-prev";
import { data } from "../for-posts-pages/data";

export function Feed() {
  return (
    <div className='feed-feed__wrapper'>
      {data.map((blog) => (
        <BlogPrev data={blog} />
      ))}
    </div>
  );
}
