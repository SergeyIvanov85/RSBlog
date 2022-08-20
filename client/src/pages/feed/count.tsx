import { ICount } from "../for-posts-pages/interfaces";
interface CountProps {
  count: ICount;
}

export function Count({ count }: CountProps) {
  return (
    <div className='icon'>
      <div className='icon__view'>
        <div className='icon__view_img'></div>
        <div className='icon__view_count'> {count.view} </div>
      </div>
      <div className='icon__like'>
        <div className='icon__like_img'></div>
        <div className='icon__like_count'> {count.like} </div>
      </div>
      <div className='icon__comment'>
        <div className='icon__comment_img'></div>
        <div className='icon__comment_count'> {count.comment} </div>
      </div>
    </div>
  );
}
