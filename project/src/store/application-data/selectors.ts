import {State} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer, FilterType, SortType} from '../../constants';


export const getFilmId = (state: State): FilmId | null => state[Reducer.Application].filmId;
export const getIsFilmDisplayed = (state: State): boolean => state[Reducer.Application].isFilmDisplayed;
export const getFilter = (state: State): FilterType => state[Reducer.Application].filter;
export const getSort = (state: State): SortType => state[Reducer.Application].sort;
