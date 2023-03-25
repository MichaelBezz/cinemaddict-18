import {createSlice} from '@reduxjs/toolkit';
import {fetchComments} from '../api-actions';
import {CommentsDataState} from '../../types/state';
import {Reducer} from '../../constants';


const initialState: CommentsDataState = {
  comments: [],
  isLoading: false
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
      });
  }
});