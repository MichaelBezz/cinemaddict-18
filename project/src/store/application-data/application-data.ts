import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApplicationDataState} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer, FilterType, SortType} from '../../constants';


const initialState: ApplicationDataState = {
  filmId: null,
  isFilmDisplayed: false,
  filter: FilterType.All,
  sort: SortType.Default
};

export const applicationData = createSlice({
  name: Reducer.Application,
  initialState,
  reducers: {
    setFilmId: (state, action: PayloadAction<FilmId | null>) => {
      state.filmId = action.payload;
      state.isFilmDisplayed = action.payload !== null;
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
      state.sort = SortType.Default;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    }
  }
});

export const {setFilmId, setFilter, setSort} = applicationData.actions;
