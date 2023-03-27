import {State} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer, Filter, Sort} from '../../constants';


export const getFilmId = (state: State): FilmId | null => state[Reducer.Application].filmId;
export const getIsFilmDisplayed = (state: State): boolean => state[Reducer.Application].isFilmDisplayed;
export const getFilter = (state: State): Filter => state[Reducer.Application].filter;
export const getSort = (state: State): Sort => state[Reducer.Application].sort;
