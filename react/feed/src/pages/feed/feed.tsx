import { BlogPrev } from "./blog-prev";
import { data } from "./data";


export function Feed (){
  return (
    <div className="feed-feed__wrapper">
       <BlogPrev data={data[0]}/>
      <BlogPrev data={data[1]}/>
      <BlogPrev data={data[2]}/>
      <BlogPrev data={data[3]}/>
      <BlogPrev data={data[2]} />
    </div>
  )
}