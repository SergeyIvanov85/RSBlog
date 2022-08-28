import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../../../models";

const initialState = {
  posts: [],
  popularPosts: [],
  topicPosts: [],
  loading: false,
};

export const createPost = createAsyncThunk(
  'post/createPost', 
  async (params) => {
  try {
    const {data} = await axios.post('/posts', params)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getAllPosts = createAsyncThunk(
  'post/getAllPosts', async () => {
  try {
    const {data} = await axios.get('/posts')
    return data
  } catch (error) {
    console.log(error)
  }
})

export const removePost = createAsyncThunk(
  'post/removePost', async (id) => {
  try {
    const {data} = await axios.delete(`/posts/${id}`, id)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const updatePost = createAsyncThunk(
  'post/updatePost', async (updatedPost) => {
  try {
    const {data} = await axios.put(`/posts/${updatedPost.id}`, updatedPost)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Create Post
    .addCase(createPost.pending, (state) => {
      state.loading = true
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.loading = false
      state.posts.push(action.payload)
    })
   .addCase(createPost.rejected, (state) => {
      state.loading = false
    })

    // Getting All Posts
   .addCase(getAllPosts.pending, (state) => {
      state.loading = true
    })
   .addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.posts
      state.popularPosts = action.payload.popularPosts
      state.topicPosts = action.payload.topicPosts
    })
   .addCase(getAllPosts.rejected, (state) => {
      state.loading = false
    })
    // Delete Post
   .addCase(removePost.pending, (state) => {
      state.loading = true
    })
   .addCase(removePost.fulfilled, (state, action) => {
      state.loading = false
      state.posts = state.posts.filter((post) => post._id !== action.payload._id)
    })
   .addCase(removePost.rejected, (state) => {
      state.loading = false
    })
    // Update Post
   .addCase(updatePost.pending, (state) => {
      state.loading = true
    })
   .addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false
      const index = state.posts.findIndex((post) => post._id === action.payload._id)
      state.posts[index] = action.payload
    })
   .addCase(updatePost.rejected, (state) => {
      state.loading = false
    })
  },
})

export default postSlice.reducer