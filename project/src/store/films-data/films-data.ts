import {createSlice} from '@reduxjs/toolkit';
import {fetchFilms, putFilm, postComment, deleteComment} from '../api-actions';
import {FilmsDataState} from '../../types/state';
import {Reducer} from '../../constants';


const initialState: FilmsDataState = {
  films: [],
  isLoading: false,
  isDisabled: false
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
      .addCase(putFilm.pending, (state) => {
        state.isDisabled = true;
      })
      .addCase(putFilm.fulfilled, (state, action) => {
        state.isDisabled = false;
        const film = action.payload;

        if (film) {
          const index = state.films.findIndex((item) => item.id === film.id);
          state.films.splice(index, 1, film);
        }
      })
      .addCase(putFilm.rejected, (state) => {
        state.isDisabled = false;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        const film = action.payload?.movie;

        if (film) {
          const index = state.films.findIndex((item) => item.id === film.id);
          state.films.splice(index, 1, film);
        }
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const indexFilm = state.films.findIndex((item) => item.id === action.payload?.filmId);

        const film = {
          ...state.films[indexFilm],
          comments: state.films[indexFilm].comments.filter((comment) => !(comment === action.payload?.commentId))
        };

        state.films.splice(indexFilm, 1, film);
      });
  }
});
