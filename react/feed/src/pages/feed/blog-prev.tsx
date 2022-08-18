import { BlogInfo } from "./blog-info"
import { Count } from "./count"
import { IBlogItem } from "./interfaces"

interface BlogItemProps{
  data:IBlogItem
}

export function BlogPrev ({data}:BlogItemProps){

  return (
    <div className="blog">
           <BlogInfo info={data}/>
           <div className="blog__text_wrapper">
           <div className="blog__text">
                   {data.text}
           </div>
           </div>
           <div className="blog__count">
           <Count count={data.count}/>
           <button> Подробнее </button>
           </div>
          
     </div>
  )
}