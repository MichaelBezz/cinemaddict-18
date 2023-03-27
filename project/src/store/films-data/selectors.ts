import {createSelector} from '@reduxjs/toolkit';
import {getFilter} from '../application-data/selectors';

import {State} from '../../types/state';
import {FilmId} from '../../types/film';
import {FilmsAdapted, FilmAdapted} from '../../types/film';
import {Reducer, FilterType} from '../../constants';


export const getAllFilms = (state: State): FilmsAdapted | [] => state[Reducer.Films].films;
export const getIsLoading = (state: State): boolean => state[Reducer.Films].isLoading;

export const getFilmById = createSelector(
  [getAllFilms, (_, id: FilmId | null) => id],
  (films, id): FilmAdapted | undefined => films.find((film) => film.id === id)
);

export const getFilmsByFilter = createSelector(
  [getAllFilms, (_, filter: FilterType) => filter],
  (films, filter): FilmsAdapted => films
    .filter((film) => filter === FilterType.All ? FilterType.All : film.userDetails[filter])
);

export const getSelectedFilms = createSelector(
  [getAllFilms, getFilter],
  (films, filter): FilmsAdapted => films
    .filter((film) => filter === FilterType.All ? FilterType.All : film.userDetails[filter])
);
