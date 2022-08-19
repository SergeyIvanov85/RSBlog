import { SortTitles } from "./enums";
import { SortItem } from "./sort-item";

export function Sort () {
  return (
    <div className="sort">
      <p className="options__title">СОРТИРОВАТЬ:</p>
      {Object.entries(SortTitles).map(title=><SortItem title={title[1]}/>)}
     </div>
  )
}