import {createSelector} from '@reduxjs/toolkit';

import {State} from '../../types/state';
import {FilmId} from '../../types/film';
import {FilmsAdapted, FilmAdapted} from '../../types/film';
import {Reducer} from '../../constants';


export const getAllFilms = (state: State): FilmsAdapted | [] => state[Reducer.Films].films;
export const getIsLoading = (state: State): boolean => state[Reducer.Films].isLoading;

export const getFilmById = createSelector(
  [getAllFilms, (_, id: FilmId | null) => id],
  (films, id): FilmAdapted | undefined => films.find((film) => film.id === id)
);
