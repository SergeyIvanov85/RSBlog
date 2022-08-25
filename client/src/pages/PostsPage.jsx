import React, {useEffect, useState} from "react";
import axios from "../utils/axios";
import {PostItem} from "../components/PostItem";

export const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const fetchMyPosts = async () => {
        try {
            const {data} = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyPosts()
    }, [])

    if(!posts.length) {
        return (
          <div className='no-posts'>Кажется, вы еще не добавили ни одной статьи &#129300;</div>
        )
    }
    
    return <div className='section-wrapper'>
        <div className='user-posts'>
            {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
        </div>
    </div>

}