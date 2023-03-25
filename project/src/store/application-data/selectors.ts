import {State} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer} from '../../constants';


export const getFilmId = (state: State): FilmId | null => state[Reducer.Application].filmId;
export const getIsFilmDisplayed = (state: State): boolean => state[Reducer.Application].isFilmDisplayed;
