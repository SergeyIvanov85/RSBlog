import { BlogPrev } from "./blog-prev";
import data from './data'

export function Feed (){
  return (
    <div className="feed-feed__wrapper">
      <BlogPrev />
      <BlogPrev />
      <BlogPrev />
      <BlogPrev />
      <BlogPrev />
    </div>
  )
}