import { FC, useState } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { BsSortDown } from "react-icons/bs";
import { IPost } from "../models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface ISearchProps {
  data: IPost[];
}

export const RightSideMenu: FC<ISearchProps> = ({ data }) => {
  const [searchField, setSearchField] = useState("");
  let { posts, popularPosts, topicPosts } = useAppSelector(
    (state) => state.post
  );

  const dispatch = useAppDispatch();

  const filterPosts = (data: IPost[]) => {
    data.filter((post) => {
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSearchField(e.currentTarget.value);
    filterPosts(posts);
  };

  return (
    <div className='options'>
      <div className='options__search'>
        <label htmlFor='' className='options__title'>
          ПОИСК
        </label>
        <div className='options__search_input'>
          <input
            type='search'
            id=''
            name=''
            className=''
            placeholder='Введите ключевое слово...'
            onChange={handleChange}
          />
          <button>
            <div className='icon-search'></div>
          </button>
        </div>
      </div>

      <div className='sort'>
        <p className='options__title'>СОРТИРОВАТЬ:</p>
        <div className='sort__item'>
          <p className=''>по новизне</p>
          <BsSortDown />
        </div>
        <div className='sort__item'>
          <p className=''>по популярности</p>
          <BsSortDown />
        </div>
      </div>

      <div className='theme'>
        <p className='options__title'>ТЕМЫ:</p>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>Путешествия</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>Образование</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>Спорт</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>Здоровье</div>
        </div>
      </div>
    </div>
  );
};
