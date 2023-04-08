import {createSlice} from '@reduxjs/toolkit';
import {deleteComment, fetchComments, postComment} from '../api-actions';
import {CommentsDataState} from '../../types/state';
import {Reducer} from '../../constants';


const initialState: CommentsDataState = {
  comments: [],
  isLoading: false,
  isDisabled: false
};

export const commentsData = createSlice({
  name: Reducer.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload ?? [];
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false;
        state.comments = [];
      })
      .addCase(postComment.pending, (state) => {
        state.isDisabled = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isDisabled = false;
        const comments = action.payload?.comments;

        if (comments) {
          state.comments = comments;
        }
      })
      .addCase(postComment.rejected, (state) => {
        state.isDisabled = false;
      })
      .addCase(deleteComment.pending, (state) => {
        state.isDisabled = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isDisabled = false;

        const index = state.comments.findIndex((comment) => comment.id === action.payload?.commentId);
        state.comments.splice(index, 1);
      })
      .addCase(deleteComment.rejected, (state) => {
        state.isDisabled = false;
      });
  }
});
