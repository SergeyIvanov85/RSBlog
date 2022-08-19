import { SortTitles, ThemeTitles } from "./enums";
import { Search } from "./search-el";
import { SortItem } from "./sort-item";
import { ThemeItem } from "./theme-item";

export function Options (){
  return (
    <div className="options" >
      <div className="options__search">
        <p className="options__title">ПОИСК:</p>
        <Search/>
      </div>

      <div className="sort">
        <p className="options__title">СОРТИРОВАТЬ:</p>
        {Object.entries(SortTitles).map(title=><SortItem title={title[1]}/>)}
      </div>

      <div className="theme">
        <p className="options__title">ТЕМЫ:</p>
        {Object.entries(ThemeTitles).map(title=><ThemeItem title={title[1]}/>)}
      </div>

    </div>
  )
}