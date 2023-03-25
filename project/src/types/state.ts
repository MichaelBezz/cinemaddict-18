import {store} from '../store/store';
import {Films} from './film';
import {Comments} from './comment';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsDataState = {
  films: Films;
  isLoading: boolean;
};

export type CommentsDataState = {
  comments: Comments;
  isLoading: boolean;
};
