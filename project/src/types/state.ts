import {store} from '../store/store';
import {FilmId, FilmsAdapted} from './film';
import {Comments} from './comment';
import {Filter, Sort} from '../constants';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ApplicationDataState = {
  filmId: FilmId | null;
  isFilmDisplayed: boolean;
  filter: Filter;
  sort: Sort;
};

export type FilmsDataState = {
  films: FilmsAdapted;
  isLoading: boolean;
};

export type CommentsDataState = {
  comments: Comments;
  isLoading: boolean;
};
