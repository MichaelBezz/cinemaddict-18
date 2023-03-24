import {State} from '../../types/state';
import {Movies} from '../../types/movie';
import {Reducer} from '../../constants';


export const getMovies = (state: State): Movies | [] => state[Reducer.Movies].movies;
export const getIsMoviesLoading = (state: State): boolean => state[Reducer.Movies].isMoviesLoading;
