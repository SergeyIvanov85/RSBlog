import React, { useEffect, useState } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { BsSortDown } from "react-icons/bs";
import { PostItem } from "../components/PostItem";
import { IPost } from "../models";
import { getAllPosts } from "../redux/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const FeedPostsPage = () => {
  const [searchField, setSearchField] = useState("");
  const [filterPosts, setFilterPosts] = useState<IPost[]>([]);
  const [sortValue, setSortValue] = useState("");

  const dispatch = useAppDispatch();
  const { posts, popularPosts, topicPosts } = useAppSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    const filter = posts.filter((post: IPost) => {
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    });
    filter.sort((a: IPost, b: IPost) => {
      if (sortValue === "data") {
        return +a.createAt - +b.createAt;
      }
      if (sortValue === "views") {
        console.log(a.views - b.views);
        return a.views - b.views;
      }
      return 0;
    });
    setFilterPosts(filter);
  }, [searchField, sortValue, dispatch]);

  if (!posts.length) {
    return <div className=''>Статей не существует.</div>;
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  const handleSort = (value: string) => {
    setSortValue(value);
  };

  console.log(filterPosts);
  return (
    <div className='section-wrapper'>
      <div className='feed-page__wrapper'>
        <div className='feed-feed__wrapper'>
          {filterPosts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
        </div>
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
              <p className=''>по дате</p>
              <button
                onClick={() => {
                  handleSort("data");
                }}
              >
                <BsSortDown />
              </button>
            </div>
            <div className='sort__item'>
              <p className=''>по популярности</p>
              <button
                onClick={() => {
                  handleSort("views");
                }}
              >
                <BsSortDown />
              </button>
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
      </div>
    </div>
  );
};
