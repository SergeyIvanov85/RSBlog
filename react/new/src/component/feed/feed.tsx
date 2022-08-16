import { BlogPrev } from "./blog-prev";
import {data} from "../../data"

export function Feed (){
  return (
    <div>
<BlogPrev data={data[0]}/>

    </div>
  )
}

