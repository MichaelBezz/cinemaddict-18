import {createSelector} from '@reduxjs/toolkit';

import {State} from '../../types/state';
import {Films} from '../../types/film';
import {FilmsAdapted} from '../../types/film-adapted';

import {adaptFilmToClient} from '../../services/film-adapter';
import {Reducer} from '../../constants';


export const getFilms = (state: State): Films | [] => state[Reducer.Films].films;
export const getIsLoading = (state: State): boolean => state[Reducer.Films].isLoading;

export const getAllFilms = createSelector(
  [getFilms],
  (films: Films): FilmsAdapted => films.map((film) => adaptFilmToClient(film))
);
