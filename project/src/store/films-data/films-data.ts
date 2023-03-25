import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms} from '../api-actions';
import {FilmsDataState} from '../../types/state';
import {Reducer} from '../../constants';


const initialState: FilmsDataState = {
  films: [],
  isLoading: false
};

export const filmsData = createSlice({
  name: Reducer.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.films = action.payload ?? [];
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isLoading = false;
        state.films = [];
      });
  }
});
