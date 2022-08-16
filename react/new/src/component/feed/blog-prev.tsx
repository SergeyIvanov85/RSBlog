import { IBlogItem } from "../../interfaces"
import style from './feed.module.scss'

interface BlogItemProps{
  data:IBlogItem
}

export function BlogPrev ({data}:BlogItemProps){
 console.log(style)
  return (
<div>
  <div className={style.blogsImage}><img src={data.image} /></div>


    </div>
  )
}
