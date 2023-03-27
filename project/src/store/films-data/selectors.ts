import {createSelector} from '@reduxjs/toolkit';
import {getFilter, getSort} from '../application-data/selectors';
import {State} from '../../types/state';
import {FilmId, FilmsAdapted, FilmAdapted} from '../../types/film';
import {Reducer, FilterType, SortType} from '../../constants';


const compare: Record<SortType, (film: FilmAdapted, nextFilm: FilmAdapted) => number> = {
  [SortType.Default]: () => 0,
  [SortType.Date]: (film, nextFilm) => Date.parse(nextFilm.filmInfo.release.date) - Date.parse(film.filmInfo.release.date),
  [SortType.Rating]: (film, nextFilm) => nextFilm.filmInfo.totalRating - film.filmInfo.totalRating
};

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
  [getAllFilms, getFilter, getSort],
  (films, filter, sort): FilmsAdapted => films
    .filter((film) => filter === FilterType.All ? FilterType.All : film.userDetails[filter])
    .sort(compare[sort])
);
