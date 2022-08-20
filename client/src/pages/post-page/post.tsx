import { Count } from "../feed/count";
import { data } from "../for-posts-pages/data";

export function Post() {
  return (
    <div className='post__wrapper'>
      <div
        className='post__image'
        style={{ backgroundImage: `url(${data[0].image})` }}
      ></div>
      <div className='blog-info__caption post__caption'>
        <p> {data[0].name} </p>
        <p> {data[0].date} </p>
      </div>
      <div className='blog-info__title post__title'>
        <p> {data[0].title}</p>
        <p className='blog-info__title_category'>{data[0].category}</p>
      </div>
      <div className='post__text'>
        <p>{data[0].text}</p>
      </div>
      <div className='post__buttons'>
        <button className='btn'>Назад</button>
        <div className='post__buttons_icons'>
          <Count count={data[0].count} />
          <div className='icon__change'>
            <div className='icon__change_edit'></div>
            <div className='icon__change_delete'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
