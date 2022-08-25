import React, {useEffect, useState} from "react";
import axios from "../utils/axios";
import {PostItem} from "../components/PostItem";
import {RightSideMenu} from "../components/RightSideMenu";

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


    return <div className='section-wrapper'>
        <div className='feed-page__wrapper'>
            <div className='feed-feed__wrapper'>
                {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
            </div>
        </div>
    </div>



}