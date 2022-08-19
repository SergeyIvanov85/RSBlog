import { BlogPrev } from "./blog-prev";
import { data } from "./data";


export function Feed (){
  return (
    <div className="feed-feed__wrapper">
      {data.map(blog=><BlogPrev data={blog}/>)}
    </div>
  )
}