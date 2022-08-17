import React from "react";
import { Feed } from "./feed/feed";
import { Options } from "./feed/options";


export  const AddPostPage = () => {
   
    return <div className = "feed-page__wrapper">
<Feed/>
<Options/>
    </div>
}