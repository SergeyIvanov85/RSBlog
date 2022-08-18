import { IBlogItem } from "./interfaces"

interface BlogItemProps{
  info:IBlogItem
}

export function BlogInfo ({info}:BlogItemProps){

  return (
    <div className="blog-info">
      <div className="blog-info__image"><img src={info.image} /></div>
      <div className="blog-info__caption">
        <p> {info.name} </p>
        <p> {info.date} </p>
      </div>
      <div className="blog-info__title"> {info.title}</div>
     </div>
  )
}