import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {adaptFilmToClient, adaptFilmToServer} from '../services/film-adapter';
import {AppDispatch, State} from '../types/state';
import {FilmId, Films, Film, FilmsAdapted, FilmAdapted} from '../types/film';
import {CommentId, Comments} from '../types/comment';
import {Reducer, APIRoute} from '../constants';


export const fetchFilms = createAsyncThunk<FilmsAdapted | void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Films}/fetchFilms`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}`);
      return data.map(adaptFilmToClient);
    }
    catch {
      toast.error('Couldn\'t download films');
    }
  }
);

export const putFilm = createAsyncThunk<FilmAdapted | void, FilmAdapted, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Films}/putFilm`,
  async (film, {extra: api}) => {
    try {
      const {data} = await api.put<Film>(`${APIRoute.Films}/${film.id}`, adaptFilmToServer(film));
      return adaptFilmToClient(data);
    }
    catch {
      toast.error('Couldn\'t change the film');
    }
  }
);

export const fetchComments = createAsyncThunk<Comments | void, FilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Comments}/fetchComments`,
  async (filmId, {extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
      return data;
    }
    catch {
      toast.error('Couldn\'t download comments');
    }
  }
);

export const postComment = createAsyncThunk<Comments | void, FilmId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Comments}/postComment`,
  async (filmId, {extra: api}) => {
    try {
      const {data} = await api.post<Comments>(`${APIRoute.Comments}/${filmId}`);
      return data;
    }
    catch {
      toast.error('Couldn\'t add comment');
    }
  }
);

export const deleteComment = createAsyncThunk<void, CommentId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Comments}/deleteComment`,
  async (commentId, {extra: api}) => {
    try {
      await api.delete(`${APIRoute.Comments}/${commentId}`);
    }
    catch {
      toast.error('Couldn\'t delete comment');
    }
  }
);
