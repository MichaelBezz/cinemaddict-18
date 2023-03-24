import {store} from '../store/store';
import {Movies} from './movie';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type MoviesDataState = {
  movies: Movies;
  isMoviesLoading: boolean;
};
