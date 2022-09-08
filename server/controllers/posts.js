import Post from '../models/Post.js'
import User from '../models/User.js'
import path, {dirname} from 'path'
import  {fileURLToPath} from 'url'
import Comment from "../models/Comment.js";

// Create Post
export const createPost = async (req, res) => {
    try {
        const {title, text, topic} = req.body
        const user = await User.findById(req.userId)

        if(req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const newPostWithImage = new Post({
                username: user.username,
                title,
                text,
                imgUrl: fileName,
                author: req.userId,
                topic,
            })

            await newPostWithImage.save()
            await User.findByIdAndUpdate(req.userId, {
                $push: {posts: newPostWithImage},
            })

            return res.json(newPostWithImage)
        }

        const newPostWithoutImage = new Post({
            username: user.username,
            title,
            text,
            imgUrl: '',
            author: req.userId,
            topic,
        })

        await newPostWithoutImage.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: {posts: newPostWithoutImage},
        })
        res.json(newPostWithoutImage)

    } catch (error) {
        res.json({message: 'Что-то пошло не так!'})
    }
}

// Get All Posts
export const getAll = async (req, res) => {
    try {
        const posts = await Post.find().sort('-createdAt')
        const popularPosts = await Post.find().limit(5).sort('-views')
        const topicPosts = await Post.find().sort('-topic')

        if(!posts) {
            return res.json({message: 'Пока статей не существует!'})
        }

        res.json({posts, popularPosts, topicPosts})
    } catch (error) {
        res.json({message: 'Что-то пошло не так..'})
    }
}

// Get Post By ID
export const getById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1, likes: 1},
        })
        res.json(post)
    } catch (error) {
        res.json({message: 'Что-то пошло не так..'})
    }
}

// Get  My Posts
export const getMyPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        const list = await Promise.all(
          user.posts.map((post) => {
              return Post.findById(post._id)
          }),
        )

        res.json(list)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

// Remove Posts
export const removePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if(!post) return res.json({message: 'Такой статьи не существует!'})

        await User.findByIdAndUpdate(req.userId, {
            $pull: {posts: req.params.id},
        })

        res.json({message: 'Пост был удален.'})
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

// Update Post
export const updatePost = async (req, res) => {
    try {
        const {title, text, topic, id} = req.body
        const post = await Post.findById(id)

        if(req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))
            post.imgUrl = fileName || ''
        }

        post.title = title
        post.text = text
        post.topic = topic

        await post.save()

        res.json(post)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

//Get Post Comments
export const getPostComments = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const list = await Promise.all(
          post.comments.map((comment) => {
              return Comment.findById(comment)
          }),
        )
        res.json(list)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}