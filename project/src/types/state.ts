import {store} from '../store/store';
import {Films} from './film';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsDataState = {
  films: Films;
  isFilmsLoading: boolean;
};
