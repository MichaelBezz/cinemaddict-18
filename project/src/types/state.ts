import {store} from '../store/store';
import {FilmId, FilmsAdapted} from './film';
import {Comments} from './comment';
import {FilterType, SortType} from '../constants';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ApplicationDataState = {
  filmId: FilmId | null;
  isFilmDisplayed: boolean;
  filter: FilterType;
  sort: SortType;
};

export type FilmsDataState = {
  films: FilmsAdapted;
  isLoading: boolean;
};

export type CommentsDataState = {
  comments: Comments;
  isLoading: boolean;
};
