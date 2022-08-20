import { CommentItem } from "./comments-item";

export function Comments() {
  return (
    <div className='comments'>
      <div className='comments__button-close'></div>
      <div className='comments__list'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <textarea placeholder='Комментировать'></textarea>
      <div className='comments__buttons'>
        <button className='btn btn_small'>Удалить</button>
        <button className='btn btn_small'>Сoхранить</button>
      </div>
    </div>
  );
}
