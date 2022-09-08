import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICommentPost, IComment, StateComment } from "../../../models";
import axios from "../../../utils/axios";

const initialState: StateComment = {
  comments: [],
  loading: false,
};

export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ postId, comment }: ICommentPost) => {
    try {
      const { data } = await axios.post<IComment>(`/comments/${postId}`, {
        postId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  "comment/getPostComments",
  async (postId: string) => {
    try {
      const { data } = await axios.get<IComment[]>(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Create Comment
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })

      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload!);
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false;
      })

      // Getting Comments

      .addCase(getPostComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload!;
      })
      .addCase(getPostComments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
