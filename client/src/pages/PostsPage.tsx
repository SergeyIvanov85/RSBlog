import React, {useEffect, useState} from "react";
import axios from "../utils/axios";
import {PostItem} from "../components/PostItem";
import {Link} from "react-router-dom";


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
            <div className='section-wrapper'>
                <div className='no-posts'>
                    <p className='no-posts__title'>Кажется, вы еще не добавили ни одной статьи &#129300;</p>
                    <Link to={'/new'}><button className='btn'>Добавить</button></Link>
                </div>
            </div>
        ) 
    }

    return <div className='section-wrapper posts-page-wrapper'>
        <div className="user-posts">
            <div className='user-posts__inner'>
                {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
            </div>
        </div>
        <div>
            <Link to={'/new'}><button className='btn'>Добавить</button></Link>
        </div>
    </div>
}