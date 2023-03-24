import {createSlice} from '@reduxjs/toolkit';
import {fetchMovies} from '../api-actions';
import {MoviesDataState} from '../../types/state';
import {Reducer} from '../../constants';


const initialState: MoviesDataState = {
  movies: [],
  isMoviesLoading: false
};

export const moviesData = createSlice({
  name: Reducer.Movies,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isMoviesLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isMoviesLoading = false;
        state.movies = action.payload ?? [];
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isMoviesLoading = false;
        state.movies = [];
      });
  }
});
