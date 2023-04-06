import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchComments, postComment} from '../api-actions';
import {CommentsDataState} from '../../types/state';
import {CommentId} from '../../types/comment';
import {FilmId} from '../../types/film';
import {Reducer} from '../../constants';


const initialState: CommentsDataState = {
  comments: [],
  isLoading: false
};

export const commentsData = createSlice({
  name: Reducer.Comments,
  initialState,
  reducers: {
    deleteCommentId: (state, action: PayloadAction<{filmId: FilmId; commentId: CommentId}>) => {
      const index = state.comments.findIndex((comment) => comment.id === action.payload.commentId);
      state.comments.splice(index, 1);
    }
  },
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
      .addCase(postComment.fulfilled, (state, action) => {
        const comments = action.payload?.comments;

        if (comments) {
          state.comments = comments;
        }
      });
  }
});

export const {deleteCommentId} = commentsData.actions;
