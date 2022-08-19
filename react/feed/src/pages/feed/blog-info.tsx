import { IBlogItem } from "./interfaces"

interface BlogItemProps{
  info:IBlogItem
}

export function BlogInfo ({info}:BlogItemProps){

  return (
    <div className="blog-info">
      <div className="blog-info__image" style={{ backgroundImage: `url(${info.image})`}}></div>
      <div className="blog-info__caption">
        <p> {info.name} </p>
        <p> {info.date} </p>
      </div>
        <div className="blog-info__title"> 
        <p> {info.title}</p>
        <p className="blog-info__title_category">{info.category}</p>
     </div>
     </div>
  )
}