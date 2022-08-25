import { Router} from 'express';
import {checkAuth} from "../utils/checkAuth.js";
import {createPost, getAll, getById, getMyPosts, removePost} from "../controllers/posts.js";

const router = new Router()

// Create Post
//http://localhost:3002/api/posts
router.post('/', checkAuth, createPost)

// Get All Posts
//http://localhost:3002/api/posts
router.get('/', getAll)

// Get Post By Id
//http://localhost:3002/api/posts:id
router.get('/:id', getById)

// Get My Posts
//http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)

// remove Post
//http://localhost:3002/api/posts:id
router.delete('/:id', checkAuth, removePost)



export default router