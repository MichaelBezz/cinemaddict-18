import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApplicationDataState} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer, Filter, Sort} from '../../constants';


const initialState: ApplicationDataState = {
  filmId: null,
  isFilmDisplayed: false,
  filter: Filter.All,
  sort: Sort.Default
};

export const applicationData = createSlice({
  name: Reducer.Application,
  initialState,
  reducers: {
    setFilmId: (state, action: PayloadAction<FilmId | null>) => {
      state.filmId = action.payload;
      state.isFilmDisplayed = action.payload !== null;
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    }
  }
});

export const {setFilmId, setFilter, setSort} = applicationData.actions;
