import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms, putFilm, postComment} from '../api-actions';
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
      })
      .addCase(putFilm.fulfilled, (state, {payload: film}) => {
        if (film) {
          const index = state.films.findIndex((item) => item.id === film.id);
          state.films.splice(index, 1, film);
        }
      })
      .addCase(postComment.fulfilled, (state, action) => {
        const film = action.payload?.movie;

        if (film) {
          const index = state.films.findIndex((item) => item.id === film.id);
          state.films.splice(index, 1, film);
        }
      });
  }
});
